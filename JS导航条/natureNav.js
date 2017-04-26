/**
 * Created by Administrator on 2017/4/4 0004.
 */
function hasClass(obj, cls) {
    return obj.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
        obj.className = obj.className.replace(reg, "");
    }
}

function addClass(obj, cls) {
    if (!hasClass(obj,cls)) {
        obj.className += " " + cls;
    }
}


window.onload = function () {

    window.onscroll = function () {

        var top = document.body.scrollTop;
        var options = document.getElementById('menu').getElementsByTagName('a');
        var items = document.getElementById('content').getElementsByClassName('item');
        var currentId = "";

        //console.log(top);
        for (var i = 0; i < items.length; i++) {
            var _items = items[i];
            var _itemTop = _items.offsetTop;

            if (top > _itemTop - 200) {
                currentId = _items.id;
            }
            else {
                break;
            }
        }

        for (var j = 0; j < options.length; j++) {
            var _options = options[j];
            var _hrefs = _options.href.split("#");
            var myId = _hrefs[_hrefs.length - 1];
            if (currentId && currentId == myId) {
                addClass(_options, 'current');
            }
            else {
                removeClass(_options, 'current');
            }
        }

    }

};