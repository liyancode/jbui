/**
 * Created by yanli6 on 12/30/15.
 */
$(function () {
    // global var
    update_shopping_cart_btn(SHOPPING_CART["total_price"],SHOPPING_CART["product_count"]);
    console.log(SHOPPING_CART);
    console.log(SHOPPING_CART["product_list"]);
});

function update_shopping_cart_btn(total_price,count){
    $('#shopping_cart_total_price').after("  ¥ "+(total_price*1.00).toFixed(2));
    $('#shopping_cart_total_count').after(count);
}