define([''], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow, merge = jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="drafts" class="col"><h1>Drafts<a href="/post/create" class="button">New Draft</a></h1><form id="new_post" method="post" action="/post/create" accept-charset="UTF-8" class="new_post"><input id="post_title" name="title" placeholder="start typing yout title ..." size="30" type="text" tabindex="1"/></form><ul>');
 if ( drafts && drafts.length)
{
// iterate drafts
;(function(){
  if ('number' == typeof drafts.length) {
    for (var $index = 0, $$l = drafts.length; $index < $$l; $index++) {
      var draft = drafts[$index];

buf.push('<li><h3><a');
buf.push(attrs({ 'href':('/post/edit/' + draft.id) }, {"href":true}));
buf.push('>');
var __val__ = draft.title_markup
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></h3><span class="links"><a');
buf.push(attrs({ 'href':('/post/preview/' + draft.id), "class": ('admin-view') }, {"href":true}));
buf.push('>view</a><a');
buf.push(attrs({ 'href':('/post/edit/' + draft.id), "class": ('admin-view') }, {"href":true}));
buf.push('>edit</a><a');
buf.push(attrs({ 'data-confirm':('Are you sure?'), 'data-method':('delete'), 'rel':('nofollow'), 'href':('/post/remove/' + draft.id), "class": ('admin-delete') }, {"data-confirm":true,"data-method":true,"rel":true,"href":true}));
buf.push('>x</a></span></li>');
    }
  } else {
    for (var $index in drafts) {
      var draft = drafts[$index];

buf.push('<li><h3><a');
buf.push(attrs({ 'href':('/post/edit/' + draft.id) }, {"href":true}));
buf.push('>');
var __val__ = draft.title_markup
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></h3><span class="links"><a');
buf.push(attrs({ 'href':('/post/preview/' + draft.id), "class": ('admin-view') }, {"href":true}));
buf.push('>view</a><a');
buf.push(attrs({ 'href':('/post/edit/' + draft.id), "class": ('admin-view') }, {"href":true}));
buf.push('>edit</a><a');
buf.push(attrs({ 'data-confirm':('Are you sure?'), 'data-method':('delete'), 'rel':('nofollow'), 'href':('/post/remove/' + draft.id), "class": ('admin-delete') }, {"data-confirm":true,"data-method":true,"rel":true,"href":true}));
buf.push('>x</a></span></li>');
   }
  }
}).call(this);

}
buf.push('</ul></div><div id="published" class="col"><h2>Published<a href="/" class="button">Home</a></h2><ul>');
 if(publish && publish.length)
{
// iterate publish
;(function(){
  if ('number' == typeof publish.length) {
    for (var $index = 0, $$l = publish.length; $index < $$l; $index++) {
      var post = publish[$index];

buf.push('<li><h3><a');
buf.push(attrs({ 'href':('/post/single/' + post.id) }, {"href":true}));
buf.push('>');
var __val__ = post.title_markup
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></h3><span class="links"><a');
buf.push(attrs({ 'href':('/post/single/' + post.id), "class": ('admin-view') }, {"href":true}));
buf.push('>view</a><a');
buf.push(attrs({ 'href':('/post/edit/' + post.id), "class": ('admin-view') }, {"href":true}));
buf.push('>edit</a><a');
buf.push(attrs({ 'data-confirm':('Are you sure?'), 'data-method':('delete'), 'rel':('nofollow'), 'href':('/post/remove/' + post.id), "class": ('admin-delete') }, {"data-confirm":true,"data-method":true,"rel":true,"href":true}));
buf.push('>x</a></span></li>');
    }
  } else {
    for (var $index in publish) {
      var post = publish[$index];

buf.push('<li><h3><a');
buf.push(attrs({ 'href':('/post/single/' + post.id) }, {"href":true}));
buf.push('>');
var __val__ = post.title_markup
buf.push(null == __val__ ? "" : __val__);
buf.push('</a></h3><span class="links"><a');
buf.push(attrs({ 'href':('/post/single/' + post.id), "class": ('admin-view') }, {"href":true}));
buf.push('>view</a><a');
buf.push(attrs({ 'href':('/post/edit/' + post.id), "class": ('admin-view') }, {"href":true}));
buf.push('>edit</a><a');
buf.push(attrs({ 'data-confirm':('Are you sure?'), 'data-method':('delete'), 'rel':('nofollow'), 'href':('/post/remove/' + post.id), "class": ('admin-delete') }, {"data-confirm":true,"data-method":true,"rel":true,"href":true}));
buf.push('>x</a></span></li>');
   }
  }
}).call(this);

}
buf.push('</ul></div>');
}
return buf.join("");
};
});
