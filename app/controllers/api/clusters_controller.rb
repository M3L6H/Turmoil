class Api::ClustersController < ApplicationController
    def create
        @cluster = Cluster.new(cluster_params)

        if @cluster.save
            if @cluster.prev_orderable_id
                prev = @cluster.prev_orderable_type.constantize().find_by(id: @cluster.prev_orderable_id)
                if prev
                    prev.update!(next_orderable_id: @cluster.id, next_orderable_type: "Cluster")
                end
            end
            
            # TODO: Only beings with the right permissions should be able to create clusters
            render :create
        else
            render json: @cluster.errors.full_messages, status: 422
        end
    end

    def destroy
        @cluster = Cluster.find_by(id: params[:id])

        if @cluster
            # TODO: Only beings with the right permissions should be able to destroy clusters
            prev_orderable = @cluster.prev_orderable_id ? @cluster.prev_orderable_type.constantize.find(@cluster.prev_orderable_id) : nil
            next_orderable = @cluster.next_orderable_id ? @cluster.next_orderable_type.constantize.find(@cluster.next_orderable_id) : nil

            @cluster.transaction do
                prev_orderable.update!(next_orderable_id: @cluster.next_orderable_id, next_orderable_type: @cluster.next_orderable_type) if prev_orderable
                next_orderable.update!(prev_orderable_id: @cluster.prev_orderable_id, prev_orderable_type: @cluster.prev_orderable_type) if next_orderable
                @cluster.destroy
            end

            render :destroy
        else
            render json: ["Could not find cluster with id #{ params[:id] }"], status: 404
        end
    end

    def update
        @cluster = Cluster.find_by(id: params[:id])

        if @cluster
            # TODO: Only beings with the right permissions should be able to update clusters
            if @cluster.update(cluster_params)
                render :update
            else
                render json: @cluster.errors.full_messages, status: 422
            end
        else
            render json: ["Could not find cluster with id #{ params[:id] }"], status: 404
        end
    end

private
    def cluster_params
        params.require(:cluster).permit(:name, :private, :permitted_roles, :dimension_id, :next_orderable_id, :next_orderable_type, :prev_orderable_id, :prev_orderable_type)
    end
end
