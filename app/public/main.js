/*!
 * Snippetfy
 *
 * Copyright(c) 2018 Danilo Luz <danilo-2108@hotmail.com>
 * version 0.1.0
 */
$(document).ready(() => {
  /**
   * Alerts
   */
  setTimeout(() => {
    const alert = document.querySelector('.alert');

    if (alert) { alert.className += ' alert-hidden'; }
  }, 3000);

  /**
   * MDE Editor
   */
  $('.mde').each(() => {
    const simplemde = new SimpleMDE({
      element: this,
      spellChecker: false,
      status: false,
    });
    // simplemde.render();
  });

  /**
   * Modals
   */
  $('[data-modal-open]').click((event) => {
    event.preventDefault();

    $($(this).data('modal-open')).addClass('active');
  });

  $('[data-modal-close]').click((event) => {
    event.preventDefault();

    $($(this).data('modal-close')).removeClass('active');
  });

  $(document).keydown((e) => {
    e = e || window.event;
    if (e.keyCode === 27) {
      $('.modal').removeClass('active');
    }
  });
});
