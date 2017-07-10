/**
 * Created by jack on 2017/6/22.
 */
$(function () {
    var productid=getQueryString("productid");
    getmoneyProduct(productid);
    function getmoneyProduct(productid){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getmoneyctrlproduct",
            data:{
                "productid":productid
            },
            success:function (data) {
                console.log(data);
                var html=template("moneyProduct",data);
                $("#headerTop").html(html);
            }
        })
    }
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
})