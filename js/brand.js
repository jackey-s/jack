/**
 * Created by jack on 2017/6/25.
 */
$(function () {
    var brandtitleid=getQueryString("brandtitleId");
    getBrand(brandtitleid);
    getBrandlist(brandtitleid);
    function getBrand(brandtitleid){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getbrand",
            data:{"brandtitleid":brandtitleid},
            success:function(data){
                var html=template("brabdD",data);
                $(".title").html(html);
                $(".title > .titleIn:eq(0) > a > i").css("backgroundColor","red");
                $(".title > .titleIn:eq(1) > a > i").css("backgroundColor","#FFC219");
                $(".title > .titleIn:eq(2) > a > i").css("backgroundColor","#73FF6B");
            }

        })
    }

    function getBrandlist(brandtitleid){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getbrandproductlist",
            data:{"brandtitleid":brandtitleid,"pagesize":4},
            success:function(data){
                var html=template("brandD2",data);
                //console.log(data);
                var productId=data.result[0].productId;
                //console.log(productid);
                var productImg=data.result[0].productImg;
                var productName=data.result[0].productName;
                $(".reommen-in").html(html);
                //getBrandPing(productid,productImg,productName);
                $.ajax({
                    url:"http://182.254.146.100:3000/api/getproductcom",
                    data:{
                        "productid":productId,
                        //"productImg":productImg,
                        // "productName":productName
                    },
                    success: function (data) {
                        console.log(data);
                        var html1=template("brandD3",data);
                        $(".brandDi").html(html1);
                        $(".pinglun .tt").html(productImg);
                        $(".pinglun .aaaa").html(productName);
                    }
                })
            }
        })
    }



    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    };
})