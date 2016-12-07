// jQuery(document).ready(function($) {
//   $('.field-type-text-with-summary').click(function(){
//     alert('I am a p, punk!');
//   });
// });
jQuery(document).ready(function($) {
  $('.field-type-text-with-summary').hover(function(){
    $(this).css("color", "red");
    }, function(){
    $(this).css("color", "black");
  });
});
jQuery(document).ready(function($) {
  $('.title a').hover(function(){
    $(this).css("color", "red");
    $(this).css("text-decoration", "underline")
    }, function(){
    $(this).css("color", "black");
    $(this).css("text-decoration", "none")
  });
});
