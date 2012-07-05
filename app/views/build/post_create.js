define([''], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow, merge = jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<form id="new_post" action="/post/save" method="post" name="login" accept-charset="UTF-8" class="new_post"><div class="contain"><div id="text-title" class="active expandingArea"><pre><span></span><br/></pre><textarea tabindex="1" name="title" placeholder="Title here">');
var __val__ = title
buf.push(null == __val__ ? "" : __val__);
buf.push('</textarea></div><fieldset class="markdown image"><div id="text-content" class="expandingArea active"><pre><span></span><br/></pre><textarea tabindex="2" name="markup" type="password" placeholder="Write post here"></textarea></div></fieldset></div><div id="publish-bar"><div class="contain"><div class="left"><a href="/admin">« Admin</a></div><div class="right"><label for="post_draft">Draft&nbsp;</label><input id="post_draft" checked="checked" name="draft" value="1" type="checkbox"/><input id="save-button" tabindex="3" type="submit" value="Save"/></div></div></div></form>');
}
return buf.join("");
};
});
