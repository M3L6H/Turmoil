# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

# We want our response keys to be camelized
Jbuilder.key_format camelize: :lower