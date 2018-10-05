M.AutoInit();

(function($){
  $(function(){

    $('.sidenav').sidenav();

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
