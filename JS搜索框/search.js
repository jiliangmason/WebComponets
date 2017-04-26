/**
 * Created by Administrator on 2017/4/23 0023.
 */

function relatedWords(d) {
    var _html = "";
    /*
     * d是数据，其中s字段是百度搜索的文本内容
     * window.baidu.sug({"q":"","p":false,"bs":"","csor":"0","status":769,"s":[]});
     * */
    for (var i = 0; i < d.s.length; i++) {
        _html += '<li>' + d.s[i] + '</li>';
    }
    $('#search-result').html(_html);
    /*
     * 显示结果
     * */
    $('#search-suggest').show().css({
        top: $('.search-form').offset().top + $('.search-form').height() + 10,
        left: $('.search-form').offset().left,
        position: "absolute"
    });
}

$(document).ready(function () {
    $('#search-input').bind('keyup', function () {
        var searchText = $('#search-input').val();
        if (searchText.trim() == '') {
            return;
        }

        $.ajax({
            url: "http://suggestion.baidu.com/su?wd=" + searchText + '&json=1&p=3&req=2&cb=relatedWords',
            dataType: "jsonp"
        });
    });

    $(document).bind('click', function () {
        $('.suggest').hide();
    });

    /*
    * 事件代理：js代码动态生成的且多个元素绑定同一个事件函数
    * delegate('') 第一个参数可以是类名 标签名
    * 该函数功能是跳转到选中的页面
    * */
    $(document).delegate('li', 'click', function () {
        var key = $(this).text();
        location.href = "https://www.baidu.com/s?wd="+key;
    })

});

