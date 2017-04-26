/**
 * Created by Administrator on 2017/4/16 0016.
 */
window.onload = function () {
    var oBtn = document.getElementById('btnLogin');

    oBtn.onclick = function () {
        var oMask = document.createElement('div');
        oMask.id = "mask";

        var Height = document.body.scrollHeight; //整个网页的高
        var Width = document.body.scrollWidth; //整个网页的宽

        oMask.style.cssText = "width: " + Width + 'px';
        oMask.style.cssText = "height: " + Height + 'px';
        document.body.appendChild(oMask);

        var oLogin = document.createElement('div');
        oLogin.id = "login";

        var Vheight = document.body.clientHeight;
        var VWidth = document.body.clientWidth;

        document.body.appendChild(oLogin);
        oLogin.innerHTML = "<div id='login'><div class='loginCon'><div id='close'></div></div></div>"

        var mHeight = oLogin.offsetHeight;
        var mWidth = oLogin.offsetWidth;

        oLogin.style.left = Math.floor((VWidth-mWidth)/2) + 'px';
        oLogin.style.top = Math.floor((Vheight-mHeight)/2) + 'px';

        var oClose = document.getElementById('close');
        oMask.onclick = oClose.onclick = function () {
            document.body.removeChild(oMask);
            document.body.removeChild(oLogin);
        }
    };


};