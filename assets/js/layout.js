(function() {
  function toggleOverTop() {
    $(document.body).toggleClass('over-top', $(document).scrollTop() > 60);
  }
  toggleOverTop();
  $(document).scroll(function() {
    toggleOverTop();
  });

  $(document).on('click', function(e) {
    // Quick hack to remove the menu from clicking body
    if ($(e.target).get(0) === document.body && $(e.target).hasClass('menu-opened')) {
      $(document.body).removeClass('menu-opened');
    }
  })
})();
