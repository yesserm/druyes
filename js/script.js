console.log("HOLA THEME DRUYES");

(function ($, Drupal){
  Drupal.behaviors.druyes = {
    attach: function attach(context){
      $(".jqactivo").click(function (){
        $(this).fadeOut();
      });
    }
  };
})(jQuery, Drupal);
