
get '/login'do
  client=HTTPClient.new
  auth_result=client.get("#{CONFIG['REST_API_Server']}/users/auth?user_name=#{params[:user_name]}&&password=#{params[:password]}")
  auth_result.status.to_s
end

post '/register'do
  body={
      "id"=>nil,
      "userName"=>params[:user_name],
      "password"=>params[:password],
      "email"=>params[:email],
      "phoneNumber"=>nil,
      "realName"=>nil,
      "gender"=>0,
      "age"=>0,
      "career"=>nil,
      "insertTime"=>nil,
      "insertBy"=>nil,
      "updateTime"=>nil,
      "updateBy"=>nil
  }
  header={"Content-Type"=>"application/json"}
  client=HTTPClient.new
  auth_result=client.post("#{CONFIG['REST_API_Server']}/users/register",body.to_json,header)
  auth_result.to_json
end