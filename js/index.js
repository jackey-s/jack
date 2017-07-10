/*
 * @Author: jack
 * @Date:   2017-06-16 19:30:05
 * @Last Modified by:   jack
 * @Last Modified time: 2017-06-17 09:40:05
 */

'use strict';
$(function(){
    getMenu();
    function getMenu(){
        $.ajax({
            url:'http://182.254.146.100:3000/api/getindexmenu',
            success:function(data){
                var html=template("menu1",data);
                $('#menu').html(html);
                $('#menu >.row> div:nth-child(8)').on('click',function(){
                    $('#menu >.row>div:nth-last-child(-n+4)').toggle(500);
                });
            }
        })
    }
    getComment();
    function getComment(){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getmoneyctrl",
            success: function (data) {
                var html=template("comment",data);
                $('.reommen-in').html(html);
            }
        })
    }

});
