/**
 * Created by Administrator on 2017/3/23 0023.
 */
$(document).ready(function () {
   $(window).scroll(function () {
       var top = $(document).scrollTop();
       //console.log(top);
       var menu = $("#menu");
       var items = $("#content").find(".item");
       var currentId = "";

       items.each(function () {
           var self = $(this);
           var itemTop = self.offset().top;
           //console.log(itemTop);
           if (top > itemTop - 200)

           {
               currentId = "#" + self.attr("id");
           }
           else
           {
               return false;
           }
       });

       if (menu.find(".current").attr("href") !== currentId && currentId)
       {
           menu.find(".current").removeClass("current");
           menu.find("[href=" + currentId + "]").addClass("current");
       }
   })
});