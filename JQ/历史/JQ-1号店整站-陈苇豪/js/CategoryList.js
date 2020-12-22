
//顶部显示隐藏效果
$('.ss_list').mouseenter(function(){
    $('.ss_list_bg').show();
}).mouseleave(function(){
    $('.ss_list_bg').hide();
});

// 排序
//desc排序（降序）
var $listBox = $('.cate_list')
var isDesc = true
$('#sortPrice').click(function(e){
	//fragment碎片,可以理解为子活动
    var fragment= document.createDocumentFragment()//createDocumentFragment创建节点
    var list = $('li', $listBox).toArray()//toArray() 方法以数组的形式返回 jQuery 选择器匹配的元素。
    var $target = $(e.target)//target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口。

    isDesc = !isDesc
    list.sort(function(li1, li2) {
        var price1 = $('.price span', li1).text().slice(1)//slice() 方法可返回选定的元素。
        var price2 = $('.price span', li2).text().slice(1)
        var diff = price1 - price2

        return isDesc ? -diff : diff
    })

    $.map(list, function(li) {
        fragment.appendChild(li)
    })
	
	//empty() 方法移除被选元素的所有子节点和内容
    $listBox.empty()
    $listBox.append(list)

    return false
})
//createElement创建节点  和  createDocumentFragment创建文档碎片（段）----的区别
//----------------1.
//createElement是创建一个新的节点，createDocumentFragment是创建一个文档片段。
//createElement创建的元素可以使用innerHTML，createDocumentFragment创建的元素使用innerHTML并不能达到预期修改文档内容的效果，只是作为一个属性而已
//----------------2.
//createElement创建的元素可以重复操作，添加之后就算从文档里面移除依旧归文档所有，可以继续操作，
//但是createDocumentFragment创建的元素是一次性的，添加之后再就不能操作了
//（说明：这里的添加并不是添加了新创建的片段，因为上面说过，新创建的片段在文档内是没有对应的标签的，这里添加的是片段的所有子节点）