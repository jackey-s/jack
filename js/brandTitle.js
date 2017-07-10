/**
 * Created by jack on 2017/6/25.
 */
$(function(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getbrandtitle",
        success:function(data){
            var html=template("brand",data);
            $(".brandin").html(html);
        }
    })
})