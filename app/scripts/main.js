$(document).ready(function(){

      var itemTitle;
      var itemImage;
      var itemPrice;
      var itemShop;
      var cont=$('.rightSide');


      items.results.forEach(function (x) {
        itemPrice=x.price + " " + x.currency_code;

        itemTitle="<li class='truncate'>" + x.title + "</li>";

        itemShop=x.Shop.shop_name;
        x.Images.forEach(function (y) {
        itemImage ='<img src = "' + y.url_170x135 + '">';
        });

        var allItems = "<div class='box'>" + "<div class='itemImage'>" + itemImage + "</div>" + "<span class='itemTitle'>"  +
        itemTitle + "</span>" + " " + "<span class='itemShop'>" +
        itemShop + "</span>" + "<span class='itemPrice'>" + itemPrice + "</span>" +"</div>";

          $('.rightSide').append(allItems);

      });


      });
