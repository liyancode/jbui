class User
  attr_reader :user_id
  attr_reader :user_name
  attr_reader :password

  def initialize(id,user_name,pwd)
    @user_id=id
    @user_name=user_name
    @password=pwd
  end
end