$(window).resize(function(){
    $('html').css({'font-size':$(window).width()/3.9+"px"});
});
$(function(){
	$('html').css({'font-size':$(window).width()/3.9+"px"});

// ---------------------------
	$('.toggle').click(function(){
		if($(this).attr("class")=="toggle"){
			$(this).attr("class","togg");
		}
		else{
			$(this).attr("class","toggle");
		}
        if($('.doctor-list').css("display")=="none"){
            $('.doctor-list').css('display','block');
            $('iframe').css('display','none');
        }
        else{
            $('.doctor-list').css('display','none')
            $('iframe').css('display','block');
        }
	}) 


    $('.doctorTeam .left,.doctorTeam .right').click(function(){
        if($('.doctor-list').css("display")=="none"){
            $('.doctor-list').css('display','block');
            $('iframe').css('display','none');
        }
        else{
            $('.doctor-list').css('display','none')
            $('iframe').css('display','block');
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


// ----------搜索框-----------
    $('.search').focus(function(){
        $(this).attr('placeholder','');
        $('.find').css('display','none');
    })
    $('.search').blur(function(){
        if($(this).val()==''){
            $(this).attr('placeholder','检索');
            $('.find').css('display','block');
        }else{
            $('.find').css('display','none');
        }
    })


	// 添加分组
	$(".tit").click(function (){
		var names = $('.divide-l');
		var btnArray = ['取消','确定'];
		mui.prompt('添加分组名称','','',btnArray,function(e){
            if (e.index == 1) {
                $('.divide').append('<li><div class="divide-l fl">'+e.value+'</div><div class="divide-r fr"><span class="edit">编辑</span><span class="del">删除</span></div></li>');
                names.innerText = e.value;
            } 
        })
    })

	// 编辑分组
    $(".divide .edit").click(function (){
		var edit = $(this).parent().prev();
		var btnArray = ['取消','确定'];
		mui.prompt('编辑分组名称','','',btnArray,function(e){
            if (e.index == 1) {
               edit.html(e.value);
            } 
        })
    })

  //   // 删除分组
    $(".divide .del").click(function (){
    	var de = $(this).parent().parent();
		var btnArray = ['取消', '删除'];
        mui.confirm('', '确定删除该分组？<br/>所有患者将移至未分组', btnArray, function(e) {
            if (e.index == 1) {
                de.remove();
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
            } 
        })
    })


    $('.team-name input').focus(function(){
        $('.Head .hold').css('backgroundColor','#3478F3');
    })
    $('.sign .txt').focus(function(){
        $('.Head .hold').css('backgroundColor','#3478F3');
    })


    $('.every .fr .del').click(function(){
        $(this).parent().parent().parent().remove();
    })


    // 删除医生
    $(".every .dele").click(function (){
        var tmp = $(this).parent().parent();
        var btnArray = ['否', '是'];
        mui.confirm('', '确定删除该医生吗？', btnArray, function(e) {
            if (e.index == 1) {
                tmp.remove();
            } 
        })
    })



// 添加团队医生
    $('.Add i').click(function(){
        $('.allList').prepend('<div class="new"><div class="left"><img src="img/doctor.png" alt=""  class="hd"><div class="edits"><i></i>编辑</div><div class="dele" onclick=delet(this)><i></i>删除</div></div><div class="right"><div class="to"><input type="text" placeholder="姓名" class="do-name"><select class="do-job"><option value="">主任医师</option><option value="">主治医师</option></select><select class="team-job"><option value="">责任医师</option><option value="">团队医师</option></select></div><div class="mi"><p>简介:</p> <textarea name="" id=""></textarea></div><div class="bo"><p>擅长:</p> <textarea name="" id=""></textarea></div><div class="mask"></div></div><div class="ok" onclick=ok()>保存</div></div>');
    })


// 编辑医生信息
    $('.every .edits').click(function(){
        $(this).parent().next().find('.mask').css('display','none');
        $(this).css('display','none');
        $(this).next().css('display','none');
        $(this).parent().siblings('.ok').css('display','block');
        $(this).parent().next().children().find('input').css('borderBottom','1px solid #ccc');
        $(this).parent().next().children().find('select').css({'backgroundColor':'#D4D4D4','height':'0.35rem','paddingLeft':'0.1rem','color':'#808080'});
        $(this).parent().next().children().find('textarea').css({'backgroundColor':'#EFEFEF','border':'1px solid #ccc','height':'1rem'});
        $(this).parent().next().children().find('.team-job').css({'background':'#D4D4D4','color':'#808080','borderRadius':'0.03rem','width':'30%'});
    })


// 保存修改信息
    $('.every .ok').click(function(){
        $(this).prev().children().find('input').css('border','0');
        $(this).prev().children().find('select').css({'backgroundColor':'#fff','color': '#008837','paddingLeft':'0'});
        $(this).prev().children().find('.team-job').css({'color':'#fff','background':'linear-gradient(to left, #a8e063, #56ab2f)','width':'28%','height':'0.25rem','lineHeight':'0.25rem','borderRadius':'0.15rem','width':'28%','paddingLeft':'0.1rem'});
        $(this).prev().children().find('textarea').css({'backgroundColor':'#fff','border':'none','height':'auto'});
        $(this).css('display','none');
        $(this).prev().find('.mask').css('display','block');
        $(this).siblings('.left').children('.edits').css({'display':'block'});
        $(this).siblings('.left').children('.dele').css('display','block');
        $(this).prev().children().find('.sim').css('marginBottom','0.1rem');
    })



    // 个人信息验证
    $('.keep').click(function(){
        // var _url = '';
        var _name = $('.username').val();
        var _check = $('input[name=sex]:checked').val();
        var _born = $('#demo1').val();
        var _phone = $('.iphone').val();
        var _place = $('.site').val();
        var _ill = $('.ago').val();
        if(_name==''||_check==''||_born==''||_phone==''||_place==''||_ill==''){
            $('.warn').text("请将信息填写完整！");
            $('.warn').fadeIn().delay(1500).fadeOut();
            return false;
        }
        if(!(/^1[34578]\d{9}$/.test(_phone))){
            $('.warn').text("手机号码填写有误！");
            $('.warn').fadeIn().delay(1500).fadeOut();
            return false;
        }
        $.ajax({
            // url:_url,
            data:{
                name:_name,
                check:_check,
                born:_born,
                phone:_phone,
                place:_place,
                ill:_ill
            },
            type: 'POST',
            dataType: 'json',
            success: function(msg){
                if(msg.success){

                }
            }
        })
    })


    //跳转到聊天界面
    $('.visit').click(function(){
        location.href='https://www.baidu.com/';
    })

    $('.tab-change .href').click(function(){
        location.href='https://www.baidu.com/';
    })

    $('.fixed').click(function(){
        location.href='https://www.baidu.com/';
    })


// 医患身份切换
   var people = 0;
    $('.info-id .people div').click(function(){
        var index = $(this).index();
        people=index;
        changes();
    })
    function changes(){
        $('.info-id .people div').eq(people).css({'color':'#FFF','backgroundColor':'#3478F3','border':'1px solid #3478F3','borderRight':'0'}).siblings().css({'color':'#333','backgroundColor':'#FFF','border':'1px solid #ccc'});
        $('.info-form .two').eq(people).css('display','block').siblings().css('display','none');
    }

// 医生身份验证
    $('#form_doc .err').blur(function(){
        if($(this).val().length<=0){
            $(this).parent().prev().css("color","#DE0011");
        }else{
            $(this).parent().prev().css("color","#333");
        }
    })

    $('#form_doc .keeps').click(function(){
        var _name = $('#form_doc .username').val();
        var _check = $('#form_doc input[name=sex]:checked').val();
        var _date = $('#date_a').val();
        var _phone = $('#form_doc .iphone').val();
        var _title = $('#form_doc .Title').val();
        var _position = $('#form_doc .position').val();
        var _skill = $('#form_doc .skill').val();
        var _simple = $('#form_doc .simple').val();
        if(_name==''||_check==''||_date==''||_phone==''||_title==''||_position==''||_skill==''||_simple==''){
            $('.info-id span').css('display','block');
            return false;
        }
        if(!(/^1[34578]\d{9}$/.test(_phone))){
            $('#form_doc .iphone').parent().prev().css("color","#DE0011");
            return false;
        }
        else{
            $('.info-id span').css('display','none');
            location.href='doctor-submit.html';
        }
    })



// 患者身份验证
    $('#form_ill .err').blur(function(){
        if($(this).val().length<=0){
            $(this).parent().prev().css("color","#DE0011");
        }else{
            $(this).parent().prev().css("color","#333");
        }
    })

    $('#form_ill .keeps').click(function(){
        var _name = $('#form_ill .username').val();
        var _check = $('#form_ill input[name=sex]:checked').val();
        var _date = $('#date_b').val();
        var _phone = $('#form_ill .iphone').val();
        var _site = $('#form_ill .site').val();
        var _ago = $('#form_ill .ago').val();
        if(_name==''||_check==''||_date==''||_phone==''||_site==''||_ago==''){
            $('.info-id span').css('display','block');
            return false;
        }
        if(!(/^1[34578]\d{9}$/.test(_phone))){
            $('#form_ill .iphone').parent().prev().css("color","#DE0011");
            return false;
        }
        else{
            $('.info-id span').css('display','none');
            location.href='patient-submit.html';
        }
    })


    // 创建新团队
    $('.setup').click(function(){
        var tname = $('.creat .teamName').val();
        var great = $('.creat .great').val();
        if(tname==''||great==''){
            alert('请将新团队信息填写完整！');
        }
    })

    $('.hd-code .revise').click(function(){
        $('.info-form .mask').css('display','none');
        $("#form_doc .username").focus();
    })
    $('#form_doc input').blur(function(){
        $('.hd-code .revise').text("保存");
        $('.info-form .mask').css('display','block');
    })

})
