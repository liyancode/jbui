get '/'do
  haml :index
end

get '/products' do
  httpclient=HTTPClient.new
  httpclient.get("#{CONFIG['REST_API_Server']}/products?sort=id&page=0").content
end

get '/products/:id' do
  httpclient=HTTPClient.new
  @product=httpclient.get("#{CONFIG['REST_API_Server']}/products/#{params[:id]}").content
  haml :product_detail
end