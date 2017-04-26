/**
 * Created by Administrator on 2017/3/12 0012.
 */
$(function () {
   $("#menulist").on("click", "a", function () {
       var curIndex = $(this).index();
       var mValue = "-" + curIndex*100 + "%";

       if ($(this).hasClass("btn-active"))
       {
           $("#expandZone #closeBtn").click();
           return false;
       }

       if ($("#expandZone").hasClass("actived"))
       {
           $("#expandZone .expdiv").css({marginLeft: mValue});
       }
       else {
           $("#expandZone .expdiv").css({marginLeft: mValue});
           $("#expandZone").animate({height: "130px"}).addClass("actived");
       }

       $(this).addClass("btn-active").siblings().removeClass("btn-active");
       return false;
   });


    $("#expandZone #closeBtn").on("click", function () {
        $("#expandZone").animate({height: "0px"}, function () {
            $(this).removeClass("actived");
            $("#menulist .btn-active").removeClass("btn-active");
        });
        return false;
    });
    
});