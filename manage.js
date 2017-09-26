window.onload=function(){
	function ok(){
		var put = document.querySelector('.new input');
		var select = document.querySelectorAll('.new select');
		var area = document.querySelectorAll('.new textarea');
		var edit = document.querySelector('.new .edits');
		var del = document.querySelector('.new .dele');
		var ok = document.querySelector('.new .ok');
		var mask = document.querySelector('.new .mask');
		if(put.value.length==0){
			alert('请填写姓名');
			return false;
		}
		if(area[0].value.length==0){
			alert('请填写简介项');
			return false;
		}
		if(area[1].value.length==0){
			alert('请填写擅长项');
			return false;
		}
		else{
			put.style.border='0';
			select[0].setAttribute("style","background-color: #fff;color:#008837;padding-left:0;");
			select[1].setAttribute("style","background: linear-gradient(to left, #a8e063, #56ab2f);color:#FFF;padding-left:0.1rem;border-radius:0.15rem;width:28%;height:0.25rem;line-height:0.25rem;");
			area[0].setAttribute("style","background-color:#fff;border:none;height:0.5rem;margin-bottom:0;");
			area[1].setAttribute("style","background-color:#fff;border:none;height:0.2rem;");
			edit.style.display='block';
			del.style.display='block';
			ok.style.display='none';
			mask.style.display='block';
		}
	}

	function delet(item){
		var sup = item.parentNode.parentNode.parentNode;
		var n = document.querySelector('.new');
		var btnArray = ['否', '是'];
        mui.confirm('', '确定删除该医生吗？', btnArray, function(e) {
            if (e.index == 1) {
                sup.removeChild(n);
            } 
        })
	}

}
