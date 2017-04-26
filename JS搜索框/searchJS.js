/**
 * Created by Administrator on 2017/4/23 0023.
 */
var $ = function (obj) {
    return document.getElementById(obj);
};

/*
 * 可以为一个元素绑定多个事件：addEvent(id, event, fn1) addEvent(id, event, fn2) ...
 * */
var addEvent = function (id, event, fn) {
    var el = $(id) || document;
    if (el.addEventListener) {
        el.addEventListener(event, fn, false);
    }
    else if (el.attachEvent) {
        el.attachEvent('on' + event, fn);
    }
};

/*
 * 获取ele在页面中到浏览器左边的left值
 * */
var getElementLeft = function (ele) {
    var actLeft = ele.offsetLeft;
    var current = ele.offsetParent;

    while (current != null) {
        actLeft += current.offsetLeft; //父亲的左边距离
        current = current.offsetParent;
    }

    return actLeft;
};

/*
 * 获取ele在页面中到浏览器顶部的top值
 * */
var getElementTop = function (ele) {
    var actTop = ele.offsetTop;
    var current = ele.offsetParent;

    while (current != null) {
        actTop += current.offsetTop; //父亲的左边距离
        current = current.offsetParent;
    }

    return actTop;
};

var ajaxGet = function (url, callback) {
    var _xhr = null;
    if (window.XMLHttpRequest) {
        _xhr = new window.XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        _xhr = new ActiveXObject("Msxml2.XMLHTTP");
    }

    /*
     * 服务器相应请求，传给浏览器消息
     * JSON.parse使用方法把字符串转化成JS识别的对象
     * var contact = JSON.parse('{"name": "xiaomi"}')
     * contact.name = "xiaomi"
     * */
    _xhr.onreadystatechange = function () {
        if (_xhr.readyState == 4 && _xhr.status == 200) {
            callback(JSON.parse(_xhr.responseText))
        }
    };

    _xhr.open('get', url, false);
    _xhr.send(null);

};
/*
 * 事件代理：在文本中用户触发的事件名字，target.nodeName 元素节点（li a）：为标签名称， 属性节点（class id）： 属性名称
 *
 * */
var delegateEvent = function (target, event, fn) {
    addEvent(document, event, function (ev) {
        if (ev.target.nodeName == target.toUpperCase()) {
            fn.call(ev.target);
        }
    })
};

addEvent('search-input', 'keyup', function () {
    var textSearch = $('search-input').value;
    ajaxGet("同源网址" + textSearch, function (data) {
        var html = "";
        for (var i = 0; i < data.s.length; i++) {
            html += "<li>" + data.s[i] + "</li>";
        }

        $('search-result').innerHTML = html;
        $('search-suggest').style.top = getElementTop($('search-form')) + 38 + 'px';
        $('search-suggest').style.left = getElementLeft($('search-form')) + 'px';
        $('search-suggest').style.position = 'absolute';
        $('search-suggest').style.display = 'block';
    });

});

delegateEvent('li', 'click', function () {
    var keyword = this.innerHTML;
    location.href = 'https://www.baidu.com/s?wd=' + keyword;
});
