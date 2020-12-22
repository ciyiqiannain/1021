
//顶部显示隐藏效果
$('.ss_list').mouseenter(function(){
    $('.ss_list_bg').show();
}).mouseleave(function(){
    $('.ss_list_bg').hide();
});



//尺码选择和颜色选择功能
(function(){
    var $li1 = $('#choice1 li');
    var $li2 = $('#choice2 li');
//尺码选择

    choice($li1);
    choice($li2);
    function choice(obj){
        obj.click(function(){
            index=obj.index($(this));
            //alert(index)
            obj.eq(index).addClass('checked').siblings().removeClass('checked');
        });
    }
})();


//商品加减功能
//点击加按钮
(function(){
    var num = 1;
    $('.n_btn_1').click(function(){
        num ++;
        $('.n_ipt').val( num);
    });

//点击减按钮
    $('.n_btn_2').click(function(){
        num --;
        if(num<1){
            num = 1;
        }
        $('.n_ipt').val( num);
    });
})();



// 推荐
(function() {
    var recommendList = {
        list: [],//名单
        count: 1,//计算(或清点)总数
        totalSum: 0//全部归纳（总结）
    }
    var $teamList = $('.team_list')
    var $check = $('.checkbox input')
    var $sumIpt = $('.sum_ipt')
    var $totalSum = $('.team_sum span')

    // 初始化
    $teamList.each(function(){
    	//price定价
        var price = $('.price span', this).text().slice(1) - 0
        var checked = $('.checkbox input', this).is(':checked')
        recommendList.list.push({
            price: price,
            checked: checked
        })
    })
    recommendList.count = $sumIpt.val() || 1


    // 选中
    $check.click(function() {
        var index = $check.index(this)
        var checked = $(this).is(':checked')//is() 方法用于查看选择的元素是否匹配选择器
        recommendList.list[index].checked = checked
        render()
    })

    // 数量
    $sumIpt.change(function(e) {
        var newCount = $(this).val()

        if(/^[1-9]\d*$/.test(newCount)) {
            recommendList.count = newCount -0
        } else {
            $(this).val(recommendList.count)
        }
        render()
    })

    // 渲染
    function render() {
    	//reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
		//reduce() 可以作为一个高阶函数，用于函数的 compose（组合；撰写）
		//previousValue类似于each的遍历for循环
		//each遍历    循环，即for循环
		//item返回元素的第一个子节点
        recommendList.totalSum = recommendList.list.reduce(function(previousValue, item) {
            var price = item.checked ? item.price : 0;//price定价
            return previousValue + price
        }, 0) * recommendList.count

        $totalSum.text(recommendList.totalSum)
    }

    render()
})()


