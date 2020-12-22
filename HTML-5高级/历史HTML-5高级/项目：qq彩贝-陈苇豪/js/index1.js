//nav导航
$(function () {
	$('#p1').hover(function () {
		$(this).stop().animate({'background-position-x':-41+'px'},10);
		$(this).css('width','69px');
	},function () {
		$(this).stop().animate({'background-position-x':-2+'px'},10);
		$(this).css('width','36px');
	})
	
	$('#p2').hover(function () {
		$(this).stop().animate({'background-position-x':-149+'px'},10);
		$(this).css('width','69px');
	},function () {
		$(this).stop().animate({'background-position-x':-109+'px'},10);
		$(this).css('width','36px');
	})
	
	$('nav>.center>p:lt(6)').hover(function () {
		$(this).stop().animate({'background-position-x':-108+'px'},10);
	},function () {
		$(this).stop().animate({'background-position-x':0+'px'},10);
	})
	
	$('nav>.center>p:eq(2)').hover(function () {
		$(this).stop().animate({'background-position-x':-87+'px'},10);
	},function () {
		$(this).stop().animate({'background-position-x':21+'px'},10);
	})
	
	$('nav>.right>p:lt(3)').hover(function () {
		$(this).stop().animate({'background-position-y':-45+'px'},300);
	},function () {
		$(this).stop().animate({'background-position-y':-20+'px'},300);
	})
	
	//轮播图
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
	
	$('.one>.center>.top>#pic>li>img').hover(function () {
		clearInterval(timer);
		$('.one>.center>.top>p').show();
	},function () {
		timer=setInterval(function () {
			index++;
			index=index>4?0:index;
			move()
		},2000)
		$('.one>.center.top>p').hide();
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
	//轮播图  右边的  表单
	$('.form').hover(function () {
		$('.form>ul').stop().slideDown(500);
	},function () {
		$('.form>ul').stop().slideUp(500);
	})
	
	//返回顶部														！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
	//scroll触发滚动事件
	$(document).scroll(function () {
		var top=$(document).scrollTop();
		if (top>=300) {
			$('.fixed').show();
		}
		else{
			$('.fixed').hide();
		}
		$('.fixed>p').click(function () {
			$('html,body').scrollTop(0);
		})
	})
	
	//左侧栏
	$('.one>.left>ul>li>p').mouseover(function () {
		$(this).siblings('.list').stop().show();
	}).mouseout(function () {
		$(this).siblings('.list').stop().hide();
	})
	
	$('.one>.left>ul>li>.list').mouseover(function () {
		$(this).stop().show();
	}).mouseout(function () {
		$(this).stop().hide();
	})
})
















































