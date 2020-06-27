class Api::DimensionsController < ApplicationController
    before_action :require_json
    before_action :require_logged_in, except: [:index, :show]
    
    def index
        # TODO: Update with query parameters
        @dimensions = Dimension.where(public: true)
        render :index
    end

    def show
        @dimension = Dimension.find_by(id: params[:id])

        if @dimension
            render :show
        else
            render json: ["Could not find dimension with id #{params[:id]}"], status: 404
        end
    end

    def create
        @dimension = Dimension.new(dimension_params)
        @dimension.being_id = current_being.id

        if @dimension.save
            # Initialize the details of a dimension
            Dimension.transaction do
                Role.create!(dimension_id: @dimension.id, can_be_deleted: false, name: "everyone")
                DimensionBeing.create!(nickname: current_being.username, being_id: current_being.id, dimension_id: @dimension.id)
                text_cluster = Cluster.create!(name: "Text Realms", dimension_id: @dimension.id)
                voice_cluster = Cluster.create!(name: "Voice Realms", dimension_id: @dimension.id, prev_orderable_id: text_cluster.id, prev_orderable_type: "Cluster")
                text_cluster.update!(next_orderable_id: voice_cluster.id, next_orderable_type: "Cluster")
                Realm.create!(name: "general", cluster_id: text_cluster.id, dimension_id: @dimension.id)
                Realm.create!(name: "general", cluster_id: voice_cluster.id, dimension_id: @dimension.id, realm_type: "voice")
            end
            render :create
        else
            render json: @dimension.errors.full_messages, status: 422
        end
    end

    def destroy
        @dimension = Dimension.find_by(id: params[:id])
        
        if @dimension
            if current_being.owns @dimension
                @dimension.destroy
                render :destroy
            else
                render json: ["Cannot delete a dimension you don't own"], status: 403
            end
        else
            render json: ["Could not find dimension with id #{params[:id]}"], status: 404
        end
    end

    def update
        @dimension = Dimension.find_by(id: params[:id])
        
        if @dimension
            if current_being.owns @dimension
                if @dimension.update(dimension_params)
                    render :update
                else
                    render json: @dimension.errors.full_messages, status: 422
                end
            else
                render json: ["Cannot update a dimension you don't own"], status: 403
            end
        else
            render json: ["Could not find dimension with id #{params[:id]}"], status: 404
        end
    end

    def update_order
        unless params[:data]
            render json: "No data received", status: 200 
            return
        end

        dimension = Dimension.find_by(id: params[:id])

        if dimension
            clusters = dimension.clusters
            realms = dimension.realms
            Dimension.transaction do
                params[:data].each do |jid, model|
                    className, id = jid.split("-")
                    next_orderable_type, next_orderable_id = model[:next].split("-")
                    prev_orderable_type, prev_orderable_id = model[:prev].split("-")
                    parent_type, parent_id = model[:parent].split("-")

                    id = id.to_i unless id.nil?
                    next_orderable_id = next_orderable_id.to_i unless next_orderable_id.nil?
                    prev_orderable_id = prev_orderable_id.to_i unless prev_orderable_id.nil?
                    parent_id = parent_id.to_i unless parent_id.nil?
                    
                    if className == "Cluster"
                        cluster = clusters.find { |c| c.id == id }
                        if cluster.next_orderable_id != next_orderable_id ||
                            cluster.next_orderable_type != next_orderable_type ||
                            cluster.prev_orderable_id != prev_orderable_id ||
                            cluster.prev_orderable_type != prev_orderable_type
                            cluster.update!(next_orderable_id: next_orderable_id,
                                next_orderable_type: next_orderable_type,
                                prev_orderable_id: prev_orderable_id,
                                prev_orderable_type: prev_orderable_type)
                        end
                    else
                        realm = realms.find { |r| r.id == id }
                        if realm.next_orderable_id != next_orderable_id ||
                            realm.next_orderable_type != next_orderable_type ||
                            realm.prev_orderable_id != prev_orderable_id ||
                            realm.prev_orderable_type != prev_orderable_type ||
                            realm.cluster_id.nil? != parent_id.nil?
                            realm.update!(next_orderable_id: next_orderable_id,
                                next_orderable_type: next_orderable_type,
                                prev_orderable_id: prev_orderable_id,
                                prev_orderable_type: prev_orderable_type,
                                cluster_id: parent_id)
                        end
                    end
                end
            end
            render json: {}, status: 204
        else
            render json: ["Could not find dimension with id #{params[:id]}"], status: 404
        end
    rescue ActiveRecord::ActiveRecordError => e
        render json: ["Could not update order!"], status: 422
    end

private
    def dimension_params
        params.require(:dimension).permit(:name, :public)
    end
end
