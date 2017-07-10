/**
 * Created by jack on 2017/6/24.
 */
$(function(){
    var couponid=getQueryString("couponId");
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    };
    console.log(couponid);
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcouponproduct",
        data:{
            "couponid":couponid
        },
        success:function(data){
            console.log(data);
            var html=template("ken",data);
            $(".youHuiH").html(html);
            var carou=template("circle",data);
            $(".carousel-inner").html(carou);
            //console.log(carou);


            $(".media a").click(function(){
                var aa=$(this).attr("aa");
                var bb= '.item[bb='+aa+']';
                //console.log(bb);
                $(".carousel-inner div").removeClass("active");
                $(bb).addClass("active");
            })
            $('.carousel').carousel('pause');
        }

    })




})