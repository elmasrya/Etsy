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

        var allItems = "<div class='box'>" + itemTitle + itemImage + itemPrice + " " + itemShop + "</div>";
          $('.rightSide').append(allItems);
          console.log(itemTitle);
          console.log(itemPrice);
      });


      });
