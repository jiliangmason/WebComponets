/**
 * Created by Administrator on 2017/4/16 0016.
 */

function waterfall() {
    var $boxs = $('#main>div');
    var W = $boxs.eq(0).outerWidth(); //含有padding,margin
    var cols = Math.floor($(window).width()/W);

    $('#main').width(W*cols).css('margin:','0 auto');
    var hArr = [];
    $boxs.each(function (index, value) { //each遍历数组
        //console.log(index);
        //console.log(value);
        var h = $boxs.eq(index).outerHeight();
        if (index < cols) {
            hArr[index] = h;
        }
        else {
            var minH = Math.min.apply(null, hArr);
            var minHindex = $.inArray(minH, hArr); //返回minH的下标,可以返回数组中某个数的下标
            //console.log(value);
            $(value).css({  //value为dom元素需要转换成jquery对象才可以被操作
                'position':'absolute',
                'top': minH + 'px',
                'left': minHindex*W + 'px'
            });
            hArr[minHindex] += $boxs.eq(index).outerHeight();
        }
    })

}

function checkScroll() {
    var $lastBox = $('#main>div').last(); //last方法取最后一个数
    var lastBoxDis = $lastBox.offset().top + Math.floor($lastBox.outerHeight()/2);
    var scrollTop = $(window).scrollTop(); //滚动条滚动的距离
    var documentH = $(window).height; //可视区域的高度

    return (lastBoxDis < scrollTop + documentH);

}

$(document).ready(function () {
    waterfall();
    var dataInt = {"data": [{"src":"25.jpg"},{"src":"26.jpg"},{"src":"27.jpg"},{"src":"28.jpg"}]};
    $(window).on('scroll', function () {
        if (checkScroll) //不可以写成if(checkScroll())
        {
            $.each(dataInt.data, function (key, value) { //$.each(数组， 函数(属性， 值))
                //console.log(value);
                var oBox = $('<div>').addClass('box').appendTo($('#main'));
                var oPic = $('<div>').addClass('pic').appendTo($(oBox));
                var oImg = $('<img>').attr('src','images/' + $(value).attr('src')); //$(value)转化Object为jq对象
                oImg.appendTo($(oPic));
            });

            waterfall();
        }

    })
});