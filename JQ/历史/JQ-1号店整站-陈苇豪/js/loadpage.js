
var form = document.querySelector('#loadForm');//querySelector() 方法返回匹配指定选择器的第一个元素
form.addEventListener('invalid',function(event){
	//document.addEventListener() 方法用于向文档添加事件，
    var elem = event.target;
    var vali = elem.validity;
    var name = elem.name;
	
	//JavaScript 验证 API
	//valueMissing如果 input 元素中的数据是合法的返回 true，否则返回 false
	//setCustomValidity设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法------------------
	//----------------使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成true，则 checkValidity 总是会返回false
    switch (name){
        case 'userName':
            if(vali.valueMissing){
                elem.setCustomValidity('用户名不能为空');
            }else if(vali.patternMismatch){
                elem.setCustomValidity('请输入合法的邮箱、手机号码或者2-4位的汉字昵称');
            }else{
                elem.setCustomValidity('');
            }
            break;
        case 'password':
            if(vali.valueMissing){
                elem.setCustomValidity('密码不能为空');
            }else if(vali.patternMismatch){
                elem.setCustomValidity('密码为6-10位字符');
            }else{
                elem.setCustomValidity('');
            }
            break;
    }
},true)