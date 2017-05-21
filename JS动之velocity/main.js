/**
 * Created by Administrator on 2017/5/21 0021.
 */
$(document).ready(function () {
    var container = $('.container');
    var box = $('.box');
    var buddy = $('.buddy');
    var pop = $('.pop');
    var open = $('.btn');
    var close = $('.close');
    var imgs = pop.find('img');

    /*
    * 进入
    * */
    $.Velocity.RegisterEffect('mason.moveFromBottomTotop', {
        defaultDuration: 500,
        calls: [
            [{opacity: [1, 0], translateY: [0, 100]}]
        ] //[1:结束的值  0:开始的值]
    });

    /*
    * 退出
    * */
    $.Velocity.RegisterEffect('mason.moveFromtopToBottom', {
        defaultDuration: 300,
        calls: [
            [{opacity: [0, 1], translateY: [100, 0]}]
        ] //[1:结束的值  0:开始的值]
    });

    /*
    * 图片展现
    * */
    $.Velocity.RegisterEffect('mason.scaleIn', {
        defaultDuration: 300,
        calls: [
            [{opacity: [1, 0], scale: [1, 0.3]}]
        ] //[1:结束的值  0:开始的值]
    });

    /*
     * 图片消失
     * */
    $.Velocity.RegisterEffect('mason.scaleOut', {
        defaultDuration: 300,
        calls: [
            [{opacity: [0, 1], scale: [0.3, 1]}]
        ] //[1:结束的值  0:开始的值]
    });

    var seqInit = [{
        elements: container,
        properties: 'mason.moveFromBottomTotop',
        options: {
            delay: 500
        }
    }, {
        elements: box,
        properties: 'mason.moveFromBottomTotop',
        options: {
            sequenceQueue: false //同时执行
        }
    }, {
        elements: buddy,
        properties: 'mason.moveFromBottomTotop',
        options: {
            sequenceQueue: false,
            delay: 60
        }
    }];

    var seqClick = [
        {
            elements: container,
            properties: 'mason.moveFromtopToBottom'
        },{
            elements: box,
            properties: 'mason.moveFromtopToBottom',
            options: {
                sequenceQueue: false
            }
        },{
            elements: container,
            properties: 'mason.moveFromBottomTotop'
        },{
            elements: pop,
            properties: 'mason.moveFromBottomTotop',
            options: {
                sequenceQueue: false
            }
        },{
            elements: imgs,
            properties: 'mason.scaleIn'
        }
    ];

    var seqClose = [
        {
            elements: imgs,
            properties: "mason.scaleOut"
        },
        {
            elements: container,
            properties: 'mason.moveFromtopToBottom'
        },
        {
            elements: pop,
            properties: 'mason.moveFromtopToBottom',
            options: {
                sequenceQueue: false
            }
        },
        {
            elements: container,
            properties: 'mason.moveFromBottomTotop',
            options: {
                delay: 60
            }
        },
        {
            elements: box,
            properties: 'mason.moveFromBottomTotop',
            options: {
                sequenceQueue: false
            }
        },
        {
            elements: buddy,
            properties: 'mason.moveFromBottomTotop',
            options: {
                sequenceQueue: false,
                delay: 60
            }
        }
    ];

    $.Velocity.RunSequence(seqInit);

    open.on('click', function () {
        $.Velocity.RunSequence(seqClick);
    });

    close.on('click', function () {
        $.Velocity.RunSequence(seqClose);
    })
});