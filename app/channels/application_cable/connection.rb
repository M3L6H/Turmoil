module ApplicationCable
    class Connection < ActionCable::Connection::Base
    #     identified_by :current_being

    #     def connect
    #         self.current_being = find_verified_being
    #     end

    # private
    #     def find_verified_being
    #         if verified_being = Being.find_by(id: cookies.signed["user.id"])
    #             verified_being
    #         else
    #             reject_unauthorized_connection
    #         end
    #     end
    end
end
