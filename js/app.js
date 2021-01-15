$(document).ready(function () {
    var times = 0;


    //判斷螢幕寬度
    //  var winWide = window.screen.width //獲取當前螢幕解析度
    //alert(winWide);

    if ($(window).width() < 767) {
        console.log("aaaass");
        // JavaScript here 
        // 當視窗寬度小於767px時執行
    }
$(".nav-item").mouseenter(function(){

});


    $("#btn").click(function () {
        times += 1;
        if (times % 2 == 1) {
            $(".list").css("display", "block");
        }
        else {
            $(".list").css("display", "none");
        }

        $(".list-item").click(function () {
            times = 0;
        });

    });

});
