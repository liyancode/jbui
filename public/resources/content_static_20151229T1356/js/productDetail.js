/**
 * Created by yanli6 on 12/14/15.
 */
$(function () {
    var product=productDetail["product"];
    var comments=productDetail["comments"];
    var li=document.getElementById("item-gallery-swiper-wrapper-slide-li");
    li.innerHTML='<img src="'+location.origin+'/resources/infoimage/products_main/'+product["id"]+'.jpg" alt="title">';

    var item_panel_header_wrapper=document.getElementById("item-panel-header-wrapper");
    item_panel_header_wrapper.innerHTML='<div id="item-panel-tile-and-brief"> ' +
    '<p class="product-title">'+product["title"]+'</p> ' +
    '<p class="product-brief">' +
     product["description"] +
    '</p> ' +
    '</div> ' +
    '<p class="product-brief-m" id="item-panel-tile-product-brief-m">' +
     product["description"] +
    '</p> ' +
    '<span class="product-price"> ' +
    '<span>¥</span> ' +
    '<strong>' +
     product["currentPrice"] +
    '</strong> ' +
    '</span>';


    document.getElementById("product-favorite-count").innerHTML=product["likeCount"];
    document.getElementById("product-comment-count").innerHTML=product["commentCount"];

    var item_detail_comment_region=document.getElementById("item-detail-comment-region");
    var h3=document.createElement("h3");
    h3.innerHTML="用户评论"
    item_detail_comment_region.appendChild(h3);
    for(var i=0;len=comments.length,i<len;i++){
        var comment=comments[i];
        var insertTime=new Date(comment["insertTime"]);
        var dateStr=insertTime.getFullYear()+
            "."+(insertTime.getMonth()+1)+
            "."+insertTime.getDate()+
            " "+insertTime.getHours()+
            ':'+insertTime.getMinutes()+
                ':'+insertTime.getSeconds();
        var article=document.createElement("article");
        article.setAttribute("class","item-detail-comment");
        article.innerHTML='<div class="item-detail-comment-panel"> ' +
        '<div class="item-detail-comment-content"> ' +
        '<p>'+comment["commentContent"]+' at '+dateStr+'</p> ' +
        '</div> ' +
        '</div>';

        item_detail_comment_region.appendChild(article);
    }
});