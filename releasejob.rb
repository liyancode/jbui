def editlinks(filepath, currentTimeStr)
  text = File.read(filepath)
  text.gsub!(/content_static_[\da-zA-Z]+/, "content_static_#{currentTimeStr}")
  File.open(filepath, "w"){|file|
    file.write(text)
  }
end

# get CurrentTime String
currentTime = Time.now
currentTimeStr = currentTime.strftime("%Y%m%dT%H%M")

# get dir whose name is to be changed
publicFiles = Dir.entries("public/resources")
contentsStaticDir = ""
publicFiles.each{|f|
  if f.start_with?("content_static")
    contentsStaticDir = "public/resources/#{f}"
    break
  end
}

# rename contents_static dir
File.rename(contentsStaticDir, "public/resources/content_static_#{currentTimeStr}")

# # edit links in contents_static/css/style.css
# styleFile = "public/resources/contents_static_#{currentTimeStr}/css/style.css"
# editlinks(styleFile, currentTimeStr)

# edit links in views
hamlFiles = Dir.entries("app/views").drop(2)
hamlFiles.each do |file|
  if file.include?".haml"
    editlinks("app/views/#{file}", currentTimeStr)
  else
    temp_list=Dir.entries("app/views/#{file}").drop(2)
    temp_list.each{|tempfile|
      editlinks("app/views/#{file}/#{tempfile}", currentTimeStr)
    }
  end
end


