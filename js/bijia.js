/**
 * Created by jack on 2017/6/21.
 */
$(function(){
    var productid=getQueryString("productid");
    var categoryId=getQueryString("categoryid");
    //console.log(productid);
    getProduct(productid);
    getPingJia(productid);
    getcategory(categoryId);
    function getcategory(categoryId){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getcategorybyid?categoryid="+categoryId,
            success:function(data){
                console.log(data);
                $(".breadcrumb>.active").html(data.result[0].category);
            }
        })
    }
    function getProduct(productid,categoryId){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getproduct",
            data:{
                "productid":productid
            },
            success: function (data) {
                console.log(data);
                var html=template("bijiaTmp",data);
                $(".bijia-Top").html(html);

            }
        })
    }

    function getPingJia(productid){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getproductcom",
            data:{
                "productid":productid
            },
            success:function(data){
                console.log(data);
                var htmll=template("pingJiaTmp",data);
                $(".top6").html(htmll);
            }
        })
    }


    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
});
