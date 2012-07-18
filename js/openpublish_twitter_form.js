/**
 * Adds preview to the form
 */
(function($) {
  
  $(document).ready(function(){
  
    $('.column-side').append('<div id="openpublish-twitter-preview"><h1>Preview</h1></div>');
    
    $.ajax({
      url: '/ajax/get_twitter_block/',
      success: function(data){
        $('#openpublish-twitter-preview').append(data);
      }
    });
    
  });

})(jQuery);
