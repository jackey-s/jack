
$(function(){
    var categoryId=getQueryString("categoryid");
    var pageid=getQueryString("pageid");
    getcategory(categoryId);
    function getcategory(categoryId){
        $.ajax({
            url:"http://127.0.0.1:3000/api/getcategorybyid?categoryid="+categoryId,
            success:function(data){
                console.log(data);
                //var html=template("categoryTitle",data);
                //console.log(html);
                //$(".breadcrumb").html(html);
                $(".breadcrumb>.active").html(data.result[0].category);
            }
        })
    }
    setproduct(categoryId,pageid);
    function setproduct(categoryId,pageid){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getproductlist?categoryid="+categoryId,
            data:{
                "categoryid ":categoryId,
                "pageid":pageid ||1
            },
            success:function(data){
                console.log(data);
                var page=Math.ceil(data.totalCount/data.pagesize);
                //console.log(page);
                var pageli="";
                for(var i=0;i<page;i++){
                    var dz="productlist.html?categoryid="+categoryId+"&pageid="+(i+1);
                    pageli+="<li><a href="+dz+">第"+(i+1)+"/"+page+"页</a></li>";
                }
                console.log(pageli);
                $("#dropdownMenu1").html("第"+pageid+"页");
                $("#dropdownMenu1").append ('<span class="caret"></span>');
                var prevdz,nextdz;
                prevdz="productlist.html?categoryid="+categoryId+"&pageid="+(pageid-1);
                nextdz="productlist.html?categoryid="+categoryId+"&pageid="+(parseInt(pageid)+1);
                if(pageid<=1){
                    prevdz="productlist.html?categoryid="+categoryId+"&pageid="+1;
                    nextdz="productlist.html?categoryid="+categoryId+"&pageid="+2;
                }else if(pageid>=page){
                    prevdz="productlist.html?categoryid="+categoryId+"&pageid="+(pageid-1);
                    nextdz="productlist.html?categoryid="+categoryId+"&pageid="+page;
                }
                $(".prev-dz").attr("href",prevdz);
                $(".next-dz").attr("href",nextdz);
                $(".dropdown-menu").html(pageli);
                var html=template("productlist",data);
                $(".product-in").html(html);
            }
        })
    }
    function getQueryString(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = location.search.substr(1).match(reg);
        if (r != null) return unescape(decodeURI(r[2])); return null;
    }
})