/**
 * Created by Administrator on 2017/4/8 0008.
 */
window.onload = function () {
    var demo = document.getElementById('demo');
    var mask = document.getElementById('mark');
    var small_glass = document.getElementById('float-box');
    var big_glass = document.getElementById('big-box');
    var small_box = document.getElementById('small-box');
    var big_box_img = document.getElementById('big-box-img');

    mask.onmouseover = function () {
        small_glass.style.display = "block";
        big_glass.style.display = "block";
    };

    mask.onmouseout = function () {
        small_glass.style.display = "none";
        big_glass.style.display = "none";
    };

    mask.onmousemove = function (ev) {
        var _ev = ev || window.event;
        var _left = _ev.clientX + document.body.scrollLeft - demo.offsetLeft - small_box.offsetLeft - small_glass.offsetWidth/2;
        var _top = _ev.clientY + document.body.scrollTop - demo.offsetTop - small_box.offsetTop - small_glass.offsetHeight/2;

        if (_left < 0) {
            _left = 0;
        }
        else if (_left > small_box.offsetWidth - small_glass.offsetWidth) {
            _left = small_box.offsetWidth - small_glass.offsetWidth;
        }

        if (_top < 0) {
            _top = 0;
        }
        else if (_top > small_box.offsetHeight - small_glass.offsetHeight) {
            _top = small_box.offsetHeight - small_glass.offsetHeight;
        }

        small_glass.style.left = _left + 'px';
        small_glass.style.top = _top + 'px';

        var _percentX = -_left/(small_box.offsetWidth - small_glass.offsetWidth);
        var _percentY = -_top/(small_box.offsetHeight - small_glass.offsetHeight);

        big_box_img.style.left = _percentX*(big_box_img.offsetWidth - big_glass.offsetWidth) + 'px';
        big_box_img.style.top = _percentY*(big_box_img.offsetHeight - big_glass.offsetHeight) + 'px';

        //console.log(small_glass.style.top);
    }
};