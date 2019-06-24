$(function() {
  function toggleOverTop() {
    $(document.body).toggleClass('over-top', $(document).scrollTop() > 60);
  }
  toggleOverTop();
  $(document).scroll(function() {
    toggleOverTop();
  });

  // Menu
  $(document).on('click', function(e) {
    // Quick hack to remove the menu from clicking body
    if ($(e.target).get(0) === document.body && $(e.target).hasClass('menu-opened')) {
      $(document.body).removeClass('menu-opened');
    }
  });

  // Announcement
  var $el = $('.announcement'),
      now = new Date();
      dismissedAnnouncement = window.localStorage.getItem('dismissed-announcement');

  $(document).on('click', '.announcement .close', function() {
    $(this).closest('.announcement').removeClass('show');
  });

  if ($el.length) {
    $el.each(function() {
      var $an = $(this);

      var from = $an.data('from') ? new Date($an.data('from')) : null,
          to = $an.data('to') ? new Date($an.data('to')) : null,
          id = $an.data('id');

      if (id > dismissedAnnouncement && (!from || now > from) && (!to || now < to)) {
        setTimeout(function() {
          $an.addClass('show');
          window.localStorage.setItem('dismissed-announcement', id);
        }, 2000);
        return false;
      }
    });
  }
});
