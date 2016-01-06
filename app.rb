require 'sinatra'
require 'sequel'
require 'yaml'
require 'httpclient'
require 'active_support'
require 'active_support/core_ext'
require 'require_all'

set :bind, '0.0.0.0'

set :views, 'app/views'

enable :sessions
use Rack::Session::Pool, :expire_after => 3600 # 60 minutes

# before /(\/admin)\/[^(login)]/ do
#   if session["loginuser"]!=nil&&session["loginuser"].getEmail=='admin'
#   else
#     redirect '/admin/login'
#   end
# end
#
# get '/session'do
#   session.to_json
# end

# session["login_user"]=User.new("xiaoming","123")

CONFIG = YAML.load_file('config.yml')
# DB = Sequel.connect(CONFIG['dbconnect'])

require_all 'util'
require_all 'app/models'
require_all 'app/controllers'
