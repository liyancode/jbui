get '/'do
  session["login_user"]=User.new(13,"xiaoming","123")
  sc=ShoppingCart.new
  sc.id=1
  sc.user_id=13
  sc.product_count=1
  sc.total_price =155
  httpclient=HTTPClient.new
  p rslt= httpclient.get("#{CONFIG['REST_API_Server']}/shoppingCartProducts/#{sc.id}").content
  sc.product_list=JSON(rslt)["allList"]
  session["shopping_cart"]=sc
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