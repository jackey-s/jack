/**
 * Created by jack on 2017/6/23.
 */
$(function() {
//$("#commenT .row div").css("width",window.screen.width/2);
    getComment();
    function getComment() {
        $.ajax({
            url: "http://182.254.146.100:3000/api/getinlanddiscount",
            success: function (data) {
                var newdata = {
                    "result": []
                };
                for (var i = 0; i < 6; i++) {
                    newdata.result.push(data.result[i])
                }
                console.log(newdata);
                var html = template("inlandD", newdata);
                $(".row").html(html);
                $(".loading").hide();
                height = $(".row").height() - window.screen.height;
                console.log(height);
                console.log(window.screen.height);
                console.log($(".row").height());
            }
        })
    }

    var scrollTop = $(window).scrollTop();

    $(window).scroll(function () {
        if ($(document.body).scrollTop() >=
            $(".row").height() - window.screen.height) {

        }
    })
});
