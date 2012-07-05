define([''], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow, merge = jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="container"><time>');
var __val__ = date
buf.push(null == __val__ ? "" : __val__);
buf.push('</time><div id="content">');
 if ( !posts || !posts.length)
{
buf.push('<section> \nNo posts to show.<a href="/admin">Go to admin?</a></section>');
}
 else
{
// iterate posts
;(function(){
  if ('number' == typeof posts.length) {
    for (var $index = 0, $$l = posts.length; $index < $$l; $index++) {
      var post = posts[$index];

buf.push('<section><div class="post contain"><h1 class="aside"><a');
buf.push(attrs({ 'href':('/post/single/' + post.id) }, {"href":true}));
buf.push('>');
var __val__ = post.title_html
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></h1>');
var __val__ = post.content_html
buf.push(null == __val__ ? "" : __val__);
 if(isAuth)
{
buf.push('<ul class="actions"><li><a');
buf.push(attrs({ 'href':('/post/edit/' + post.id) }, {"href":true}));
buf.push('>Edit</a></li></ul>');
}
buf.push('</div></section>');
    }
  } else {
    for (var $index in posts) {
      var post = posts[$index];

buf.push('<section><div class="post contain"><h1 class="aside"><a');
buf.push(attrs({ 'href':('/post/single/' + post.id) }, {"href":true}));
buf.push('>');
var __val__ = post.title_html
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></h1>');
var __val__ = post.content_html
buf.push(null == __val__ ? "" : __val__);
 if(isAuth)
{
buf.push('<ul class="actions"><li><a');
buf.push(attrs({ 'href':('/post/edit/' + post.id) }, {"href":true}));
buf.push('>Edit</a></li></ul>');
}
buf.push('</div></section>');
   }
  }
}).call(this);

}
buf.push('<nav class="pagination">');
if(paging.l)
{
buf.push('<span class="prev"><a');
buf.push(attrs({ 'href':('/page/' + page.prev), 'rel':('prev') }, {"href":true,"rel":true}));
buf.push('>< Previous</a></span>');
}
buf.push('&nbsp;');
if(paging.r)
{
buf.push('<span class="next"><a');
buf.push(attrs({ 'href':('/page/' + page.next), 'rel':('next') }, {"href":true,"rel":true}));
buf.push('>Next ></a></span>');
}
buf.push('</nav></div></div>');
}
return buf.join("");
};
});
