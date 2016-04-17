$(".popup").hide()
$(".dark_screen").hide()

$(".recommend_btn").click(function(){
	$(".dark_screen").fadeIn(1500, $(".popup").fadeIn(750))
})