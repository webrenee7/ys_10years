// JavaScript Document
$(window).scroll(function(){
		backtopShow();
		function backtopShow(){
			if($(window).scrollTop()>=300){
				$("#back_top").fadeIn("slow");
			}
			else{
				$("#back_top").fadeOut("slow");
			}
		}
	});
function backTop() {
    $("html,body").animate({
        scrollTop: "0px"
    },
    250,
    function() {
        $("#back_top").css("display", "none")
    })
}