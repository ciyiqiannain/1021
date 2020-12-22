$(function () {
	//-----------------------------1.---------------------------
	var index=0;
	var move=null;
	move=function () {
		$('#pic>li').eq(index).addClass('a').siblings('li').removeClass('a');//.eq(index)
		$('#num>li').eq(index).addClass('b').siblings('li').removeClass('b');//数字轮播
	}
	var timer=setInterval(function () {
		index++;
		index=index>4?0:index;//index=index>4?0:index;
		move()
	},2000)
	
	$('#box').hover(function () {
		clearInterval(timer);
		$('p').show();
	},function () {
		timer=setInterval(function () {
			index++;
			index=index>4?0:index;
			move()
		},2000)
		$('p').hide();
	})
	//-----------------------------2.---------------------------
	//数字轮播
	$('#num>li').hover(function () {
			index=$(this).index();
			move();
	})
	//-----------------------------3.---------------------------
	//左右箭头
	$('#left').click(function () {
		index--;
		index=index<0?4:index;
		move();
	})
	$('#right').click(function () {
		index++;
		index=index>4?0:index;
		move();
	})
})
	
	
	