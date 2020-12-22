$(function () {
	//	---------------------------------------nav
	$('.li2').children('ul').hover(function () {
		$(this).children('li').children('.img1').attr('src','img/嗨果视频网站icon图/顶部/icon-看过-黑-hover.png');
	},function () {
		$(this).children('li').children('.img1').attr('src','img/嗨果视频网站icon图/顶部/icon-看过-黑-默认.png');
	})
	
	$('.li2').children('ul').hover(function () {
		$(this).children('li').children('.img2').attr('src','img/嗨果视频网站icon图/顶部/icon-上传-黑-hover.png');
	},function () {
		$(this).children('li').children('.img2').attr('src','img/嗨果视频网站icon图/顶部/icon-上传-黑-默认.png');
	})
	$('.li2').children('ul').hover(function () {
		$(this).children('li').children('.img3').attr('src','img/嗨果视频网站icon图/顶部/icon-客户端-黑.png');
	},function () {
		$(this).children('li').children('.img3').attr('src','img/嗨果视频网站icon图/顶部/icon-客户端-黑-默认.png');
	})
})