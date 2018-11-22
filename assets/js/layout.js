(function() {
  function toggleOverTop() {
    $(document.body).toggleClass('over-top', $(document).scrollTop() > 60);
  }
  toggleOverTop();
  $(document).scroll(function() {
    toggleOverTop();
  });
})();
