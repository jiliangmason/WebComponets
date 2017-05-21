/**
 * Created by Administrator on 2017/5/20 0020.
 */
window.onload = function () {
    (function () {
        var curTime = new Date();
        var endTime = new Date(2017, 4, 21);
        /*
         * getTime: ms
         * */
        var leftTime = endTime.getTime() - curTime.getTime();
        var leftDay = Math.ceil(leftTime / 24 * 60 * 60 * 1000);

        var timeShow = document.getElementById('timeShow');
        timeShow.innerHTML = leftDay;
    })();

    (function () {
        var timeSpace = document.getElementById('LeftTime');
        function render() {
            var timer;
            var endtime = new Date('2017/5/21, 18:08:20');
            var nowtime = new Date();

            var leftime = parseInt((endtime.getTime()-nowtime.getTime())/1000);
            var leftday = parseInt(leftime/(24*60*60));
            var hour = parseInt(leftime/(60*60)%24);
            var min = parseInt(leftime/60%60);
            var sec = parseInt(leftime%60);

            if (leftime<=0) {
                clearTimeout(timer);
                timeSpace.innerHTML = "结束";
            }
            timeSpace.innerHTML = leftday+'天'+hour+'小时'+min+'分钟'+sec+'秒';
            timer = setTimeout(render, 1000);
        }

        render();

    })();
};