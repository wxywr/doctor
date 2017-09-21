$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});
$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});

// ---------------------------
	$('.toggle').click(function(){
		$('.doctor-list').slideToggle();
		if($(this).attr("class")=="toggle"){
			$(this).attr("class","togg");
		}
		else{
			$(this).attr("class","toggle");
		}
	}) 

    $('.manage').click(function(){
        $('.alert').toggle();
    })


// ----------------------------
    var n=0;
    $('.tab .tabs').click(function(){
        var index = $(this).index();
        n=index;
        tab();
    })
    function tab(){
        $('.tab .tabs').eq(n).css('color','#0096DF').siblings().css('color','#595757');
        $('.tab-change ul').eq(n).css('display','block').siblings().css('display','none');
    }


// ---------------------
    $('.search').focus(function(){
        $(this).attr('placeholder','');
        $('.find').css('display','none');
    })
    $('.search').blur(function(){
        $(this).attr('placeholder','检索');
        $('.find').css('display','block');
    })


	// 添加分组
	$(".tit").click(function (){
		var names = $('.divide-l');
		var btnArray = ['取消','确定'];
		mui.prompt('添加分组名称','','',btnArray,function(e){
            if (e.index == 1) {
                $('.divide').append('<li><div class="divide-l fl">'+e.value+'</div><div class="divide-r fr"><span class="edit">编辑</span><span class="del">删除</span></div></li>');
                names.innerText = e.value;
            } else {
                return;
            }
        })
    })

	// 编辑分组
    $(".edit").click(function (){
		var edit = this;
		var btnArray = ['取消','确定'];
		mui.prompt('编辑分组名称','','',btnArray,function(e){
            if (e.index == 1) {
               edit.innerText = e.value;
            } else {
                return;
            }
        })
    })

  //   // 删除分组
    $(".del").click(function (){
    	var tmp = this;
		var btnArray = ['否', '是'];
        mui.confirm('', '确定删除该分组？<br/>所有患者将移至未分组', btnArray, function(e) {
            if (e.index == 1) {
                tmp.remove();
            } else {
                return;
            }
        })
    })


    // 病历添加分组
    $(".illness .add").click(function (){
        var add = $('.add');
        var btnArray = ['取消','确定'];
        mui.prompt('添加分组名称','','',btnArray,function(e){
            if (e.index == 1) {
                $('.illness').prepend('<li>'+e.value+'</li>')
                add.innerText = e.value;
            } else {
                return;
            }
        })
    })

    
    $('.team-name input').blur(function(){
        $('.Head .hold').css('backgroundColor','#3478F3');
    })
    $('.sign .txt').blur(function(){
        $('.Head .hold').css('backgroundColor','#3478F3');
    })


    // 删除医生
    $(".every .dele").click(function (){
        var tmp = $('.every');
        var btnArray = ['否', '是'];
        mui.confirm('', '确定删除该医生吗？', btnArray, function(e) {
            if (e.index == 1) {
                tmp.remove();
            } else {
                return;
            }
        })
    })


    $('.Add').click(function(){
        $('.allList').prepend('<div class="new"><div class="left"><img src="img/doctor.png" alt=""></div><div class="right"><div class="to"><input type="text" placeholder="姓名" class="do-name"><select class="do-job"><option value="">主任医师</option><option value="">主治医师</option></select><select class="team-job"><option value="">责任医师</option><option value="">团队医师</option></select></div><div class="mi"><p>简介:</p> <textarea name="" id="" rows="3"></textarea></div><div class="bo"><p>擅长:</p> <textarea name="" id="" rows="3"></textarea></div></div><div class="ok">保存</div></div>');
    })

})