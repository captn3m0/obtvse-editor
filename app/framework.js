define(['jade','jquery'],function (Jade,$) {

  function renderTemplate(path,data,cb) {
  	data = $.extend({}, this, data);
  	require(['text!'+path],function(template){
      var compiledTemplate = Jade.compile(template);
  	  cb(compiledTemplate(data));
  	})
  };

  var Framework = function(element){
  	var el = $(element);

  	this.render = function(path,data,cb){
  	  renderTemplate(path,data,function(html){
  	  	el.html(html);
        if($.isFunction(cb))
          cb();
  	  })
  	}
  };

  return Framework;

});