get '/shoppingCarts' do
  httpclient=HTTPClient.new
  httpclient.get("#{CONFIG['REST_API_Server']}/shoppingCarts/#{session["login_user"].user_id}").content
end

post '/shoppingCarts' do

  httpclient=HTTPClient.new
  httpclient.get("#{CONFIG['REST_API_Server']}/shoppingCarts/#{session["login_user"].user_id}").content
end