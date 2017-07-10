/**
 * Created by jack on 2017/6/19.
 */
$(function () {
    getrecommenT();
    function getrecommenT(){
        $.ajax({
            url:"http://182.254.146.100:3000/api/getcategorytitle",
            success:function(data){
                var html=template("categoryT",data);
                $("#recommen>.panel-group").html(html);
                var recommenTitle=$("#recommen >.panel-group >.panel-default >.panel-heading > h5 > a");
                recommenTitle.on("click",function(e){
                    var titleId=$(this).attr("data-titleId");
                    $.ajax({
                        url:"http://182.254.146.100:3000/api/getcategory?titleid="+titleId,
                        success:function(data){
                            var html1=template("categoryT1",data);
                            var panelBody=$(e.target).parent().parent().parent().find(".panel-collapse").find(".panel-body");
                            panelBody.html(html1);
                            var colist=panelBody.find(".row>.div");
                            //var bian=colist.length%3||3;
                            //panelBody.find(".row>div:nth-last-child(-n'+bian+')").css("border-bottom","0");
                        }
                    })
                })
            }
        })
    }



})