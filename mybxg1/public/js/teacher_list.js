define(["jquery","template"],function($,template){
    $.ajax({
        type:"get",
        url:"/api/teacher",
        dataType:"json",
        success:function(data){
            console.log(data);
            var html=template("templateTpl",{list:data.result});
            $('#teacherList').html(html);
        }
    })
    // console.log(111);
})