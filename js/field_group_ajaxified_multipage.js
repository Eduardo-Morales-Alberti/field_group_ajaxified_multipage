/**
 * @file
 * field_group_ajaxified_multipage.js
 */

(function ($, Drupal) {
  /**
   * Scroll to top.
   */
  Drupal.behaviors.scrollTop = {
    attach: function (context, settings) {
      $('html, body').animate({
        scrollTop: $("body").offset().top
      }, 200);
    }
  };
})(jQuery, Drupal);
