/**
 * Created by yanli6 on 12/8/15.
 */
$(function () {
    $.get(
        '/products',
        {page:0},
        function(response){
            var data=$.parseJSON(response);
            var products=data["products"]
            var home_product_list_ul=document.getElementById("home_product_list_ul");
            for(var i=0;len=products.length,i<len;i++){
                var product=products[i];
                var temp_is_in_cart_list=is_product_in_cart_product_list_or_not(product["id"],SHOPPING_CART["product_list"]);
                var li=document.createElement("li");
                li.setAttribute("class","col-xs-12 col-sm-12 col-md-15 col-lg-15");
                li.innerHTML='<article class="product light">' +
                '<div class="image-wrapper">' +
                '<div class="image">' +
                "<img src='resources/infoimage/products_main/"+product["id"]+".jpg' productId="+product["id"]+" onError=\"this.onerror=null;this.src='resources/content_static_20151229T1356/image/404placeholder_img.png';\">" +
                '</div>' +
                '</div> ' +
                '<div class="info"> ' +
                '<header> ' +
                '<p class="product-title">'+product["title"]+'</p> ' +
                '<p class="product-brief"> ' +
                '<a href="/products/'+product["id"]+'">'+product["description"]+'</a> ' +
                '</p> ' +
                '<span class="product-price"> ' +
                '<span>¥</span> ' +
                '<strong>' +
                 product["currentPrice"] +
                '</strong> ' +
                '</span> ' +
                '</header> ' +
                '<div class="product-comment-favorite"> ' +
                '<div class="product-favorite-region"> ' +
                '<div class="product-favorite"> ' +
                '<div class="product-favorite-button"> ' +
                '<div class="product-favorite-button-icon"> ' +
                '<i class="icon-heart-empty"></i> ' +
                '</div> ' +
                '<div class="product-favorite-count">' +
                 product["likeCount"]+
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '<div class="product-comment-region"> ' +
                '<div class="product-comment"> ' +
                '<div class="product-comment-button"> ' +
                '<div class="product-comment-button-icon"> ' +
                '<i class="icon-comment-alt"></i> ' +
                '</div> ' +
                '<div class="product-comment-count">' +
                 product["commentCount"] +
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '<div class="product-add-to-cart-region"> ' +
                '<div class="product-add-to-cart"> ' +
                add_to_cart_button_format(temp_is_in_cart_list[0],temp_is_in_cart_list[1])+
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '</article>';
                home_product_list_ul.appendChild(li);
                //console.log(product);
            }
        }
    );

    $(document).on('click','.image>img',function(){
        window.location.href=location.origin+'/products/'+this.getAttribute("productId");
    });


});

function add_to_cart_button_format(isSelected,count){
    if(isSelected){
        console.log("add_to_cart_button_format true");
        return '<div class="add-to-cart-btn show-selected-count"> ' +
            '<button class="add-to-cart-btn-minus"> ' +
            '<i class="icon-minus minus"></i> ' +
            '</button> ' +
            '<div class="add-to-cart-btn-message"> ' +
            '<i class="glyphicon glyphicon-shopping-cart cart"></i> ' +
            '<span class="message">已选 '+count+' 件</span> ' +
            '</div> ' +
            '<button class="add-to-cart-btn-plus"> ' +
            '<i class="icon-plus plus"></i> ' +
            '</button> ' +
            '</div>';
    }else{
        console.log("add_to_cart_button_format false");
        return '<div class="add-to-cart-btn "> ' +
            '<div class="add-to-cart-btn-message"> ' +
            '<i class="glyphicon glyphicon-shopping-cart cart"></i> ' +
            '<span class="message">加入购物车</span> ' +
            '</div> ' +
            '<button class="add-to-cart-btn-plus"> ' +
            '<i class="icon-plus plus"></i> ' +
            '</button> ' +
            '</div>';
    }
}

function is_product_in_cart_product_list_or_not(product_id,list_arr){
    for(var i= 0,len=list_arr.length;i<len;i++){
        if(list_arr[i]["productId"]===product_id){
            return [true,list_arr[i]["productCount"]]
        }
    }
    return [false,0]
}