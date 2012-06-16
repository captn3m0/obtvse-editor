/**
 * Support for Sammy.js
 */
(function($) {
  Sammy = Sammy || {};
  Sammy.Jade=function(app,method_alias){
    
    // *Helper* Uses Jade.js to parse a template and interpolate and work with the passed data
    //
    // ### Arguments
    //
    // * `template` A String template (.jade, not a compiled template)
    // * `data` An Object containing the replacement values for the template.
    //   data is extended with the <tt>EventContext</tt> allowing you to call its methods within the template.
    // * `partials` An Object containing one or more partials (String templates
    //   that are called from the main template).
    
    var jadeRender = function(template, data, partials) {
      data     = $.extend({}, this, data);
      partials = $.extend({}, data.partials, partials);
      var compiledTemplate = jade.compile(template);
      return compiledTemplate(data);
    };
    
    //Sammy.Jade plugin aliasing
    method_alias=method_alias||'jade';
    if(app)  app.helper(method_alias, jadeRender);
    return jadeRender;
  };
})(jQuery);
