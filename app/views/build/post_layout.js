define([''], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow, merge = jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h1><a href="/">' + escape((interp = files['config.json'].content.name) == null ? '' : interp) + '</a><span>' + escape((interp = files['config.json'].content.subtext) == null ? '' : interp) + '</span></h1><ul><li><a');
buf.push(attrs({ 'href':('' + (files['config.json'].content.twitter) + ''), 'target':('_blank') }, {"href":true,"target":true}));
buf.push('>twitter</a></li><li><a');
buf.push(attrs({ 'href':('mailto:' + (files['config.json'].content.email) + ''), 'target':('_blank') }, {"href":true,"target":true}));
buf.push('>email</a></li></ul><span class="powered-by">Powered by <a href="http://github.com/" target="_blank">Github</a>&nbsp;·<a href="/#/admin/login">Admin</a></span>');
}
return buf.join("");
};
});
