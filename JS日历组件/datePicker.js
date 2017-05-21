/**
 * Created by Administrator on 2017/5/19 0019.
 */
(function () {
    var datepicker = {};

    datepicker.getMonthData = function (year, month) {
        var ret = [];
        if (!year && !month) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1; //getMonth方法获得的月份比实际少1
        }

        var firstDay = new Date(year, month - 1, 1); //可以获取当月的第一天，本月最后一天（year, month, 0）
        var firstDayWeekDay = firstDay.getDay();

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;
        /*
         方法：getDay 返回[1,2,3,4,5,6,0] 代表周一到周天
         * 第一天是星期几，如果是星期三，那么前面有2天是上个月的
         * */
        if (firstDayWeekDay == 0) {
            firstDayWeekDay = 7;
        } //如果是星期天，改成7

        var lastDayOfLastMonth = new Date(year, month - 1, 0); //上个月最后一天
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate(); //getDate方法获得几号

        /*
         *本月第一天前面有几天是上个月
         * */
        var preMonthDayCount = firstDayWeekDay - 1;

        var lastDay = new Date(year, month, 0); //本月最后一天
        var lastDate = lastDay.getDate();

        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount; //实际日期
            var showDate = date; //显示的日期
            var thisMonth = month;

            if (date <= 0) {
                //上一个月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            }
            if (date > lastDate) {
                //下一个月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if (thisMonth == 0) {
                //上一年12月
                thisMonth = 12;
            }
            if (thisMonth == 13) {
                //下一年1月
                thisMonth = 1;
            }

            ret.push({
                month: thisMonth,
                date: date, //真实日期，有可能<0,或者超过一个月的天数
                showDate: showDate //处理后的日期
            });

        } //4~6周都可能

        return {
            year,
            month,
            ret,
        };
    };

    window.datepicker = datepicker; //全局插入对象
})();