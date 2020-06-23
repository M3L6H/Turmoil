class ApplicationRecord < ActiveRecord::Base
    self.abstract_class = true

    def cannot_contain_restricted_chars(field)
        /[^\w!.,()]/ === field
    end
end
