define([''], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow, merge = jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="container" class="show"><time>');
var __val__ = post.created
buf.push(null == __val__ ? "" : __val__);
buf.push('</time><div id="content"><section><div class="post contain"><h1 class="aside">');
var __val__ = post.title_html
buf.push(null == __val__ ? "" : __val__);
buf.push('</h1>');
var __val__ = post.content_html
buf.push(null == __val__ ? "" : __val__);
 if(isAuth)
{
buf.push('<ul class="actions"><li><a');
buf.push(attrs({ 'href':('/post/edit/' + post.id) }, {"href":true}));
buf.push('>Edit</a></li><li><a');
buf.push(attrs({ 'href':('/post/remove/' + post.id) }, {"href":true}));
buf.push('>Remove</a></li></ul>');
}
buf.push('</div><a href="/" class="button space-top">Back to Blog</a></section></div></div>');
}
return buf.join("");
};
});
