$('#kf').mouseenter(function(){
    $('.ss_list_bg').show();
}).mouseleave(function(){
    $('.ss_list_bg').hide();
});


//商品列表鼠标移入显示右边的详细列表
$(function(){
    $(".leftNav ul li").hover(
        function(){
            $(this).find(".fj").addClass("nuw");
            $(this).find(".zj").show();
        }
        ,
        function(){
            $(this).find(".fj").removeClass("nuw");
            $(this).find(".zj").hide();
        }
    )
});

	//焦点图轮播
	//-----------------------------1.---------------------------
	var index=0;
	var move=null;
	move=function () {
		//.fadeIn() & .fadeOut()使用淡入/出效果来显示被选元素
		$('.slide_box>li').eq(index).fadeIn().siblings('li').fadeOut();//.eq(index)
		$('.num>li').eq(index).addClass('active').siblings('li').removeClass('active');//数字轮播
	}
	var timer=setInterval(function () {
		index++;
		index=index>2?0:index;//index=index>2?0:index;
		move()
	},2000)
	
	$('.slide_box').hover(function () {
		clearInterval(timer);
	},function () {
		timer=setInterval(function () {
			index++;
			index=index>4?0:index;
			move()
		},2000)
	})
	//-----------------------------2.---------------------------
	//数字轮播
	$('.num>li').hover(function () {
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
		index--;
		index=index>4?0:index;
		move();
	})

//快讯自动向上移动动画
$(function(){
    function movedown(){
        var marginTop = 0 ;
        var stop =false;
        var interval = setInterval(function(){
            if(stop) return;
            $('#express').children('li').first().animate({
                    'margin-top':marginTop--},
                0,
                function(){
                    var $first =$(this);
                    if(!$first.is(':animated')){
                        if((-marginTop)>$first.height()){
                            $first.css({'margin-top':0}).appendTo($('#express'));
                            marginTop = 0;
                        } 
                    }
                });
        },50);
        $('#express').mouseover(function(){
            stop = true;
        }).mouseout(function(){
            stop = false;
        });
    }
    movedown();
});



//购物车
(function(){

    //** 展示交互
    var timeoutId
    var $last = $('.last')

    function fadeOut() {
        timeoutId = setTimeout(function() {
            $last.fadeOut('slow');
        }, 500)
    }

    $('.car_t').hover(function() {
        clearTimeout(timeoutId)
        $last.fadeIn('slow');
    }, fadeOut)

    $last.hover(function() {
        clearTimeout(timeoutId)
    }, fadeOut)
})();


    //** 功能交互
    var catObj = {
        list: [
            /*
            {
                price: 0,
                count: 0,
                smallTotalPrice: 0
            } */
        ],
        totalPrice: 0,//totalPrice总价
        totalCount: 0//totalCount总数
    }
    var $totalPrice = $('.J_totalPrice')
    var $totalCount = $('.J_totalCount')
    var $noshop = $('.noshop')
    var $shop = $('.shop')


    // 监听自定义事件:监听购物车里有没有‘商品’
    //Init初始化
    //Delete删除
    $shop.on('onInit', function(){
        render(-1)
    }).on('onDelete', function(e, index) {
        catObj.list.splice(index, 1)//splice() 方法用于添加或删除数组中的元素
        if(!catObj.list.length) {
            $shop.hide()
            $noshop.show()
        }
        render(-1)
    }).on('onChange', function(e, index) {
        render(index)
    })


    // 渲染
    function render(index) {
        // 渲染记录
        if (index > -1) {
            var $item = $('li', $shop).eq(index)
            var item = catObj.list[index]
            $('.J_inputCount', $item).val(item.count)//对应1
            $('.J_count', $item).text('共'+item.count+'件商品')
            $('.J_smallTotalPrice', $item).text('￥'+item.smallTotalPrice)
        }

        // 渲染统计
        catObj.totalCount = 0
        catObj.totalPrice = 0
        $.map(catObj.list, function(item) {
            catObj.totalCount += item.count
            catObj.totalPrice += item.smallTotalPrice
        })

        $totalPrice.text('￥'+ catObj.totalPrice)
        $totalCount.text('(' + catObj.totalCount +')')

    }

    // 数量改变
    function setInputCount (index, count) {
        var price = catObj.list[index].price
        count = count - 0
        catObj.list[index] = {
            count: count,
            price: price,
            smallTotalPrice: count * price
        }

        $shop.trigger('onChange', index)
    }

    // 初始化
    (function() {
        var $li = $('li', $shop)
        if (!$li.length) {
            $shop.hide()
            $noshop.show()
            return
        }

        $li.each(function(index) {
            var smallTotalPrice

            // 取值
            var price = $('.J_smallTotalPrice', this).text()
            var count = $('.J_inputCount', this).val()

            // 值转换number
            price = price.slice(1) - 0
            count = count - 0
            smallTotalPrice = price * count

            catObj.list.push({
                price: price,
                count: count,
                smallTotalPrice: smallTotalPrice
            })
        })
        $shop.trigger('onInit')
    })()


    // 删除
    $('.J_btnDelete').click(function() {
        if (!window.confirm('确定要删除吗？')) return

        var $li = $('li', $shop)
        var index = $li.index($(this).parents('li'))

        $li.eq(index).remove()
        $shop.trigger('onDelete', [index])
    })

    // 追加数量
    $('.J_btnAddCount').click(function() {
        var $li = $('li', $shop)
        var index = $li.index($(this).parents('li'))
        var count = $('.J_inputCount', $li.eq(index)).val()
        setInputCount(index, ++count)
    })


    // 减少数量
    $('.J_btnDelCount').click(function() {

        var $li = $('li', $shop)
        var index = $li.index($(this).parents('li'))
        var count = $('.J_inputCount', $li.eq(index)).val()
        if (--count < 1) {
            if (!window.confirm('确定要删除吗？')) return

            $li.eq(index).remove()
            $shop.trigger('onDelete', [index])
        } else {
            setInputCount(index, count)
        }
    })

    // 改变数量
    $('.J_inputCount').change(function(e) {
        var $li = $('li', $shop)
        var index = $li.index($(this).parents('li'))
        var newCount = $(this).val()

        if(/^[1-9]\d*$/.test(newCount)) {
            setInputCount(index, newCount)
        } else {
            $(this).val(catObj.list[index].count)
        }
    })