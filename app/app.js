define(['jquery','simrou','github','framework'], function($,Simrou,Github,Framework) {
  var _ = new Framework('#admin'),gh;

  var app = new Simrou({
    '/': function(){
      _.render('views/admin-login.jade',{},function(){
      	$('#username').keyup(function(e){
      	  console.log(e.target.value);
      	  $("#repository").val(e.target.value+".github.com");
      	})
      });
    },
    '/login':{
      post:function(){
      	var username = $('#username').val();
      	var password = $('#password').val();
      	if(username && password)
      	  gh=new Github({auth:'basic',username:username,password:password});
      	else
      	  gh=new Github();//This remains unauthenticated
      	gh.
      }
    }
  });

  return app;
});