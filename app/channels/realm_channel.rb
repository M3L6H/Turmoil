class RealmChannel < ApplicationCable::Channel
    def subscribed
        @realm = Realm.find(params[:realm])
        stream_for @realm
    end

    def received(data)
        # RealmChannel.broadcast_to(@realm, { missive: @realm.missives })
    end

    def unsubscribed
        # cleanup
    end
end