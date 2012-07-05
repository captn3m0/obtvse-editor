define([''], function(jade){
  return function anonymous(locals, attrs, escape, rethrow, merge) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow, merge = jade.merge;
var buf = [];
with (locals || {}) {
var interp;
 if(typeof error !== 'undefined')
{
buf.push('<p> <b>ERROR!</b>');
var __val__ = error
buf.push(escape(null == __val__ ? "" : __val__));
buf.push('</p>');
}
buf.push('<form id="new_post" action="/admin/login" method="post" name="login" accept-charset="UTF-8" class="new_post"><div class="contain"><div id="text-title" class="active expandingArea"><pre><span></span><br/><br/></pre><input tabindex="1" name="username" placeholder="Your username" style="text-align: center"/></div><fieldset class="markdown"><div id="text-content" class="expandingArea active"><pre><span></span><br/></pre><input tabindex="2" name="password" type="password" placeholder="Write your password here" style="text-align: center"/></div></fieldset></div><div id="publish-bar"><div class="contain"><div class="right"><input id="save-button" tabindex="3" type="submit" value="Save"/></div></div></div></form>');
}
return buf.join("");
};
});
