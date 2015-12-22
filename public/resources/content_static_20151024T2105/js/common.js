/**
 * Created by yanli6 on 11/26/15.
 */
$(function () {
        $(document).on("click", '#shopping_cart_button', function () {
            var shopping_cart_div=$('#shopping_cart_div')[0];
            var overlay_all=$('#overlay_all')[0];
            if(shopping_cart_div.style.display=='block'){
                shopping_cart_div.style.display='none';
                overlay_all.style.display='none';
            }else{
                shopping_cart_div.style.display='block';
                overlay_all.style.display='block';
            }
            console.log("click");
        });
        $(document).on("click", '#overlay_all', function () {

            var shopping_cart_div=$('#shopping_cart_div')[0];
            var overlay_all=$('#overlay_all')[0];
            shopping_cart_div.style.display='none';
            overlay_all.style.display='none';

            var browse_menu_button=$('#browse-menu_button')[0];
            var browse_menu_button_icon=$('#browse-menu_button-icon')[0];
            var browse_menu=$('#browse-menu')[0];
            browse_menu_button.setAttribute("class","browse-menu_button");
            browse_menu_button_icon.setAttribute("class","icon-reorder");
            browse_menu.setAttribute("class","browse-menu");
        });
        $(document).on("click", '#browse-menu_button', function () {
            var overlay_all=$('#overlay_all')[0];
            var browse_menu_button=$('#browse-menu_button')[0];
            var browse_menu_button_icon=$('#browse-menu_button-icon')[0];
            var browse_menu=$('#browse-menu')[0];
            if(browse_menu_button.getAttribute("class").indexOf("is-open")>0){
                browse_menu_button.setAttribute("class","browse-menu_button");
                browse_menu_button_icon.setAttribute("class","icon-reorder");
                browse_menu.setAttribute("class","browse-menu");
                overlay_all.style.display='none';
            }else{
                browse_menu_button.setAttribute("class","browse-menu_button is-open");
                browse_menu_button_icon.setAttribute("class","icon-remove");
                browse_menu.setAttribute("class","browse-menu is-open");
                overlay_all.style.display='block';
            }
        });

        var selector = 'li.browse-menu_nav-item';

        $(selector).on('click', function(){
            $(selector).removeClass('is-selected');
            $(this).addClass('is-selected');
            var id=$(this)[0].id;
            var item_order=id.substr(id.lastIndexOf('-')+1);
            var browse_menu_content_region=$('#browse-menu_content-region')[0];
            browse_menu_content_region.innerHTML=$('#browse-menu_content-section-'+item_order).html();
        });
}
);