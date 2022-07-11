"use strict";

//modal
var modalBtn = document.querySelectorAll('[data-modal]');
var body = document.body;
var modalClose = document.querySelectorAll('.modal__close');
var modal = document.querySelectorAll('.modal'); //mobileNav

var burger = document.getElementById('sidebarToggle');
var sidebar = document.getElementById('sidebar');
var page = document.getElementById('page'); //textarea

var textArea = document.querySelectorAll('[data-autoresize]');
"use strict";

// открытие/закрытие sidebar по кнопке бургер
// burger.addEventListener('click', event => {
//   document.body.classList.toggle('show-sidebar');
// });
// при клике проверяем есть ли класс sidebar, если класс есть вызываем функцию close, если нет - show
burger.addEventListener('click', function (event) {
  if (body.classList.contains('show-sidebar')) {
    closeSidebar();
  } else {
    showSidebar();
  }
}); // создание и добавление mask дочернему элементу элемента page

function showSidebar() {
  var mask = document.createElement('div');
  mask.classList.add('page__mask');
  mask.addEventListener('click', closeSidebar);
  page.appendChild(mask);
  body.classList.add('show-sidebar');
} // удаляем класс show-sidebar, удаляем mask


function closeSidebar() {
  body.classList.remove('show-sidebar');
  document.querySelector('.page__mask').remove();
}
"use strict";

//обработчик событий при нажатии кнопок
modalBtn.forEach(function (item) {
  item.addEventListener('click', function (event) {
    var $this = event.currentTarget;
    var modalId = $this.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    var modalContent = modal.querySelector('.modal__content'); //click не вызывает событие у родителя

    modalContent.addEventListener('click', function (event) {
      event.stopPropagation();
    });
    modal.classList.add('show');
    body.classList.add('no-scroll'); //открытие с задержкой 250ms

    setTimeout(function () {
      modalContent.style.transform = 'none';
      modalContent.style.opacity = '1';
    }, 1);
  });
}); //1.закрытие при нажатии .modal__close

modalClose.forEach(function (item) {
  item.addEventListener('click', function (event) {
    var currentModal = event.currentTarget.closest('.modal'); //забирает родительский элемент modal

    closeModal(currentModal);
  });
}); //2.закрытие при нажатии по маске

modal.forEach(function (item) {
  item.addEventListener('click', function (event) {
    var currentModal = event.currentTarget;
    closeModal(currentModal);
  });
});

function closeModal(currentModal) {
  var modalContent = currentModal.querySelector('.modal__content');
  modalContent.removeAttribute('style'); //закрытие с задержкой 250ms

  setTimeout(function () {
    currentModal.classList.remove('show');
    body.classList.remove('no-scroll');
  }, 250);
}
"use strict";

//изменение размера текстового поля при вводе
textArea.forEach(function (item) {
  var textAreaH = item.offsetHeight; // высота текстового поля

  item.addEventListener('input', function (event) {
    var $this = event.target;
    $this.style.height = textAreaH + 'px';
    $this.style.height = $this.scrollHeight + 'px'; // увеличение на высоту скролл-бара
  });
});
/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */
"use strict";
//# sourceMappingURL=main.js.map
