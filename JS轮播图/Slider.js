/**
 * Created by Administrator on 2017/3/5 0005.
 */
window.onload = function () {
    var container = document.getElementById('container');
    var oList = document.getElementById('list');
    var oButtons = document.getElementById('buttons').getElementsByTagName('span');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var index = 1;
    var interval = 10; //每一步需要100ms
    var time = 300; //切换一张图需要3000ms，一共需要time/interval步切换完毕

    var animating = false; //阻止在切换过程中按键无效：true  有效：false
    var timer = null;

    function animated(offset) {

        var NewLeft = parseInt(oList.style.left) + offset;
        var speed = offset/(time/interval); //每次移动多少
        animating = true;

        var go = function () {
            if ((speed > 0 && parseInt(oList.style.left) < NewLeft) || (speed < 0 && parseInt(oList.style.left) > NewLeft))
            {
                oList.style.left = parseInt(oList.style.left) + speed + 'px';
                setTimeout(go, interval);
            }// speed > 0向右移动且还没有到目的位置
            else
            {
                oList.style.left = NewLeft + 'px';
                if (NewLeft > -455)
                {
                    NewLeft = -1820;
                    oList.style.left = NewLeft + 'px';
                }

                if (NewLeft < -1820)
                {
                    NewLeft = -455;
                    oList.style.left = NewLeft + 'px';
                }

                animating = false;
            } //到达目的位置 parseInt(oList.style.left) = NewLeft
        };

        go();
    }

    function  ShowButton() {
        for (var i = 0; i < oButtons.length; i++)
        {
            if (oButtons[i].className == "on")
            {
                oButtons[i].className = "";
                break;
            }
        }

        oButtons[index - 1].className = "on";
    }

    oPrev.onclick = function () {
        //oList.style.left = animated(455) + 'px';
        if (animating)
            return;

        animated(455);

        index --;
        if (index < 1)
        {
            index = 4;
        }

        ShowButton();

        //debugger;
    };

    oNext.onclick = function () {
        //oList.style.left = animated(-455) + 'px';
        if (animating)
            return;

        animated(-455);

        index ++;
        if (index > 4)
        {
            index = 1;
        }

        ShowButton();
    };

    for (var i = 0; i < oButtons.length; i++)
    {
        oButtons[i].onclick = function () {
            if (animating)
                return;
            var myIndex = this.getAttribute('index');
            var offset = -455 * (myIndex - index);
            oList.style.left = animated(offset) + 'px';
            index = myIndex;
            ShowButton();
        }
    }

    function AutoPlay() {
        timer = setInterval(function () {
            oNext.onclick();
        }, 3000);
    }

    function StopPlay() {
        clearInterval(timer);
    }

    container.onmouseout = AutoPlay;
    container.onmouseover = StopPlay;

    AutoPlay();
};