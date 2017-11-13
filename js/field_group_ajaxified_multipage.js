/**
  * @file
  * A JavaScript file for the module.
  */

(function ($, Drupal) {

  Drupal.behaviors.field_group_ajaxified_multipage = {
    attach: function (context, settings) {
      scrollToTop(context);
    }
  };

  /**
   * Scroll to top.
   */
   function scrollToTop(context){
     $('html, body').animate({
       scrollTop: $("body").offset().top
     }, 200);
   }

})(jQuery, Drupal);
