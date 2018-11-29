// Main function to check the over-top thing to make shade
const toggleOverTop = () => {
  $(document.body).toggleClass('over-top', $(document).scrollTop() > 60);
};

$(() => {
  toggleOverTop();
  $(document).scroll(toggleOverTop);

  // Menu
  $(document).on('click', e => {
    // Quick hack to remove the menu from clicking body
    if ($(e.target).get(0) === document.body && $(e.target).hasClass('menu-opened')) {
      $(document.body).removeClass('menu-opened');
    }
  });

  // Announcement
  const $el = $('.announcement'),
      now = new Date();
      dismissedAnnouncement = window.localStorage.getItem('dismissed-announcement');

  $(document).on('click', '.announcement .close', () => {
    $(this).closest('.announcement').removeClass('show');
  });

  if ($el.length) {
    $el.each(function() {
      const $an = $(this),
        from = $an.data('from') ? new Date($an.data('from')) : null,
        to = $an.data('to') ? new Date($an.data('to')) : null,
        id = $an.data('id');

      if (id > dismissedAnnouncement && (!from || now > from) && (!to || now < to)) {
        setTimeout(() => {
          $an.addClass('show');
          window.localStorage.setItem('dismissed-announcement', id);
        }, 2000);
        return false;
      }
    });
  }

});
