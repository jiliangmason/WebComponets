/**
 * Created by Administrator on 2017/5/21 0021.
 */
$(document).ready(function () {
    /*$('#box1').velocity({
        width: "500px"
    }, {
        duration: 3000,
        complete: function() {
            $('#box2').velocity({
                width: "500px"
            }, {
                duration: 3000
            })
        }
    });*/

    /*
    * 动画序列
    * */
    var seq = [
        {
            elements: $('#box1'),
            properties: {width: "100px", height: "100px", opacity:'1'},
            options: {duration: 1000}
        },
        {
            elements: $('#box2'),
            properties: {width: "100px", height: "100px", opacity:"1"},
            options: {duration: 1000}
        },
        {
            elements: $('#box3'),
            properties: {width: "100px", height: "100px", opacity:"1"},
            options: {duration: 1000}
        }
    ];

    $.Velocity.RunSequence(seq);
});