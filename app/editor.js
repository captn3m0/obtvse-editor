define(['jquery'],function($) {
    // Allows for auto expanding textareas
    function makeExpandingArea(container) {
      container = $(container);
      var area = container.find('textarea')[0],
          span = container.find('span')[0];
      if (!area) {
          return;
      }
      console.log(2);
      $(area).keyup(function() {
        console.log(1);
        $(span).html(area.val());
      });
      // Enable extra CSS
      container.addClass('active');
    }
    $('.notice').delay(2000).fadeOut(500);
    return {
        editable:makeExpandingArea,
        attachEvents:function(){
          $('#post_content').bind('keyup', function () {
            var $this = $(this),
                bottom = $this.offset().top + $this.height();

            if (bottom > $(window).scrollTop() && $this.prop("selectionStart") > ($this.val().length - $this.val().split('\n').slice(-1)[0].length)) {
                $(window).scrollTop(bottom);
            }
          });

          // Set minimum height of content textarea
          $('#post_content').css('min-height', $(window).height() - $('#post_title').height() - 190);

          // Autosave
          // setInterval(function(){
          //   var form = $('.edit_post'),
          //       action = form.attr('action');
          //   $.post(action, form.serialize(), function(data){
          //    $('body').prepend('<span>Saved!</span>');
          //   });
          // },10000);
          // Preview pops open new window
          var form = document.getElementsByTagName('form')[0];
          $('#save-button').click(function() {
            form.target = '_self';
          });

          $('.notice').fadeOut(500);
          // Fade out save post notice

        }
    };
});