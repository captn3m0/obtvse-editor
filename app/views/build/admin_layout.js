define([''], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow, merge = jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<!DOCTYPE html><html><head><title>alboh blog</title><!--link(rel=\'stylesheet\', href=\'http://fonts.googleapis.com/css?family=Lato:300,900\')--><link rel="stylesheet" href="/stylesheets/style.css"></head><body class="admin"><div id="admin"><body>');
var __val__ = body
buf.push(null == __val__ ? "" : __val__);
buf.push('</body></div></body><script src="/javascripts/jquery-1.7.2.js"></script><script src="/javascripts/script.js"></script></html>');
}
return buf.join("");
};
});
