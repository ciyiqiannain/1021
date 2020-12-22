$(function () {
	//------------------------------header,滚动-----------------------------------
	$(document).scroll(function () {
		var $chang=$(document).scrollTop();
		
		if ($chang >= '200' ) {
			$('header').css('background-image','linear-gradient(blue, violet)');
		} else{
			$('header').css('background','#215CD2');
		} 
	})
	
	//------------------------------产品,list-----------------------------------
	$('.li-slide>article>ul>li:nth-child(n+2)').hover(function () {
		$(this).css('color','blue');
	},function () {
		$(this).css('color','white');
	})
	$('.li-slide').hover(function () {
		$(this).children('article').css('display','block');
	},function () {
		$(this).children('article').css('display','none');
	})
	//------------------------------轮播图----------------------------------
	var index=0;
	var move=null;
	
	move=function () {
		$('.pic>li').eq(index).addClass('a').siblings('li').removeClass('a');
		$('.num>li').eq(index).addClass('b').siblings('li').removeClass('b');
	}
	
	time=setInterval(function () {
		index++;
		index=index>2?0:index;
		move();
	},2000)
	
	$('.pic').hover(function () {
		clearInterval(time);
		$('.p1').show();
	},function () {
		time=setInterval(function () {
			index++;
			index=index>2?0:index;
			move();
		},1000)
		$('.p1').hide();
	})
	
	//-----------num
	$('.num>li').hover(function () {
		clearInterval(time);
		index=$(this).index();
		move();
	})
	//------------左右
	$('.left').click(function () {
		index--;
		index=index<0?2:index;
		move();
	})
	$('.right').click(function () {
		index++;
		index=index>2?0:index;
		move();
	})
	
	//----------------------------------------------------------------
	var dex=0;
	var mo=null;
	
	mo=function () {
		$('.pi>li').eq(dex).addClass('a').siblings('li').removeClass('a');
	}
	
	//------------左右
	$('.super_five>.p3>.left').click(function () {
		dex--;
		dex=dex<0?3:dex;
		mo();
	})
	$('.right').click(function () {
		dex++;
		dex=dex>3?0:dex;
		mo();
	})
})