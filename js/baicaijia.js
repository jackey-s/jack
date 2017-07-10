/**
 * Created by jack on 2017/6/24.
 */
$(function () {
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbaicaijiatitle",
        json:"jsonp",
        success:function(data){
            //console.log(data);
            var html=template("adLi",data);
            $(".baicaiTop").html(html);
            console.log(data);
            $(".baicaiTop li").click(function(){
                var abc = $(this).attr("pp");
                getBaiCai(abc);
            })
            var width=0;
            $.each($(".baicaiTop>li"), function () {
                width+=($(this).outerWidth(true));
                console.log(width);
            })
            $(".baicaiTop").css({"width":width})
            var myScroll = new IScroll('#baicai',{scrollX:true,scrollY:false});
        }
    })
    function getBaiCai(abc){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getbaicaijiaproduct",
            data:{
                "titleid":abc
            },
            json:"jsonp",
            success:function(data){
                var html=template("zhongZ",data);
                console.log(data);
                $(".mediaT").html(html);
            }
        })
    }
    getBaiCai(1);
})