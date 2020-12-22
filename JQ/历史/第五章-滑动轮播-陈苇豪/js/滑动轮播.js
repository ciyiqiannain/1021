$(function(){
	//先获取 图片li的width   
	var  liWidth=$('#pic>li').width();
	console.log(liWidth);
	//设置indx    用来获取图片的下标
	var index=0;
	var move=null;
	move=function(){		
		$('#pic').stop().animate({'left':-liWidth*index},3000);
		//给对应的数字li添加class背景    并移除   其兄弟的背景
		$('#num>li').eq(index).addClass('active').siblings().removeClass('active');
	}
	var timer=null;
	timer=setInterval(function(){
		index++;
		//通过三元运算符   进行对  index    设置
		//index>3? >则=0 否则等于他本身index
		index=index>4?0:index;
		move();
	},3000)
	
	//鼠标放到   盒子上   清除定时器    离开  继续轮播
	$('#box').hover(function(){
		clearInterval(timer);
		$('p').show();
	},function(){
		//重新调用     定时器timer
		timer=setInterval(function(){
			index++;
			//通过三元运算符   进行对  index    设置
			index=index>4?0:index;
			move();
		},3000);
		$('p').hide();
	})
	
	//点击左右事件
	$('#left').click(function(){
		index--;
		index=index<0?4:index;
		move();
	})
	$('#right').click(function(){
		index++;
		//通过三元运算符   进行对  index    设置
		index=index>4?0:index;
		move();
	})
	
	//数字点击   显示对应的图片
	$('#num>li').click(function(){
		index=$(this).index();
		move();
	})
})
