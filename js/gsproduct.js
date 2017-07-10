/**
 * Created by jack on 2017/6/25.
 */
$(function () {
    var shopId=0;
    var areaId=0;
    $.ajax({
        url:"http://182.254.146.100:3000/api/getgsshop",
        success: function (data) {
            var html=template("btn1",data);
            $(".btn1").html(html);
            $(".btn1 li a").click(function () {
                var text=$(this).text();
                $(".shopName").text(text);
                shopId=$(this).attr("aa");
                getRow(shopId,areaId);
                //console.log(shopId);
            })
        }
    })
    $.ajax({
        url:"http://182.254.146.100:3000/api/getgsshoparea",
        success: function (data) {
            var html=template("btn2",data);
            $(".btn2").html(html);
            $(".btn2 li a").click(function () {
                var text=$(this).text();
                text=text.substring(0,2);
                $(".areaName").text(text);
                areaId=$(this).attr("bb");
                getRow(shopId,areaId);
            })
        }
    })



    getRow(shopId,areaId);
    function getRow(shopId,areaId) {
        $.ajax({
            url:"http://182.254.146.100:3000/api/getgsproduct",
            data:{'shopid':shopId,'areaid':areaId},
            json:"jsonp",
            success: function (data) {
                //console.log(data);
                var html1 = template("rowRow",data);
                $(".row").html(html1)
            }
        })
    }

})
