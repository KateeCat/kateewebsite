// 点击相册
var index=0
var BigImg=null;
$(document).ready(function () {
	$(".content_right ul li").click(function () {
		$(".up").hide();
		index = $(this).index();
		$(".gray").show();
		$(".showImg").show();
		BigImg = $(this).find("img").attr("bigsrc");
		$(".showBig").attr("src",BigImg);

	});
	$(".gray").click(function () {
		$(".gray").hide();
		$(".showImg").hide();
	});
	$(".showImg .arrow-left").click(function () {
		index--;
		if(index<0){
			index=8;
		}
		BigImg = $(".content_right ul li").eq(index).find("img").attr("bigsrc");
		$(".showBig").attr("src",BigImg);
	});
		$(".showImg .arrow-right").click(function () {
		index++;
		if(index>8){
			index=0;
		}
		BigImg = $(".content_right ul li").eq(index).find("img").attr("bigsrc");
		$(".showBig").attr("src",BigImg);

	});
})
