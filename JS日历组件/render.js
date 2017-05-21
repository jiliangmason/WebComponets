/**
 * Created by Administrator on 2017/5/19 0019.
 */
(function () {
    var datepicker = window.datepicker;
    var wapper;
    var monthData;

    datepicker.buildUi = function (year, month) {

        monthData = datepicker.getMonthData(year, month);
        var html = `<div class="ui-datepicker-header">
                        <a href="#" class="ui-datepicker-btn ui-datepicker-prev-btn">&lt;</a>
                        <a href="#" class="ui-datepicker-btn ui-datepicker-next-btn">&gt;</a>
                        <span class="ui-datepicker-cur-month">${monthData.year} - ${monthData.month}</span>
                    </div>
                    <div class="ui-datepicker-body">
                    <table>
                        <thead>
                            <tr>
                                <th>周一</th>
                                <th>周二</th>
                                <th>周三</th>
                                <th>周四</th>
                                <th>周五</th>
                                <th>周六</th>
                                <th>周日</th>
                            </tr>
                        </thead>
                        <tbody>`;

        for (var i = 0; i < monthData.ret.length; i++) {
            if (i % 7 == 0) {
                //第一天前面加上tr
                html += `<tr>`;
            }

            html += `<td data-date="${monthData.ret[i].date}">${monthData.ret[i].showDate}</td>`;

            if (i % 7 == 6) {
                //最后一天加</tr>
                html += `</tr>`;
            }
        }

        html += `</tbody></table></div>`;
        return html;
    };

    datepicker.render = function (direction) {
        var year, month;

        if (monthData) {
            year = monthData.year;
            month = monthData.month;
        }

        if (direction == 'prev') {
            month--;
        }
        if (direction == 'next') {
            month++;
        }

        var _html = datepicker.buildUi(year, month); //year,month=undefined 以当前月份渲染
        if (!wapper) {
            wapper = document.createElement('div');
            wapper.className = 'ui-datepicker-wrapper';
        }
        wapper.innerHTML = _html;
    };

    datepicker.init = function (dom) {
        datepicker.render();

        document.body.appendChild(wapper);
        var inp = document.querySelector(dom); //输入框
        var isClick = false;
        inp.addEventListener('click', ()=> {
            if (isClick) {
                wapper.classList.remove('ui-datepicker-wrapper-show');
                isClick = false;
            }
            else {
                /*
                 * 在展开的同时获取输入框位置，使得wrap不占文档流
                 * */
                wapper.classList.add('ui-datepicker-wrapper-show');
                var top = inp.offsetTop;
                var left = inp.offsetLeft;
                var height = inp.offsetHeight;
                wapper.style.top = `${top + height}px`;
                wapper.style.left = `${left}px`;

                isClick = true;
            }
        });

        wapper.addEventListener('click', (e)=> {
            var ev = e.target;
            if (!ev.classList.contains('ui-datepicker-btn')) {
                return;
            }
            if (ev.classList.contains('ui-datepicker-prev-btn')) {
                //上一张
                datepicker.render('prev');
            }
            if (ev.classList.contains('ui-datepicker-next-btn')) {
                //下一张
                datepicker.render('next');
            }
        });

        wapper.addEventListener('click', (e)=> {
            var ev = e.target;
            if ((ev.tagName.toLowerCase() !== 'td')) {
                return;
            }

            var shwdate = ev.dataset.date;
            var date = new Date(monthData.year, monthData.month - 1, shwdate);
            inp.value = format(date);
        });

        function format(date) {
            var ret = '';
            ret += date.getFullYear() + '-';
            ret += ((date.getMonth()+1 < 10) ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-';
            ret += ((date.getDate() < 10) ? '0' + date.getDate() : date.getDate());

            return ret;
        }
    }
})();