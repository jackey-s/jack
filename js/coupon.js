/**
 * Created by jack on 2017/6/24.
 */
$(function(){
    $.ajax({
        url:"http://182.254.146.100:3000/api/getcoupon",
        success:function(data){
            console.log(data);
            var html=template("youHuiQuan",data);
            $(".ulul").html(html);
        }
    })
})