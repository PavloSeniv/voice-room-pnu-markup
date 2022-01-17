export function popUp(params) {
  let popupBg = document.querySelector(".pop-up__bg-container"); // Фон попап окна
  let popup = document.querySelector(".pop-up"); // Само окно
  let closePopupButton = document.querySelector(".pop-up__close"); //  Кнопка для скрытия окна
  let openPopupButtonsAll = document.querySelectorAll(".rooms__new-room"); // Кнопки для показа окна
  let openPopupButtons = document.querySelector(".rooms__new-room"); // Кнопки для показа окна
  let openPopupBlock = document.querySelector(".rooms__container");
  let bodyNoScroll = document.querySelector(".body");

  openPopupButtonsAll.forEach((button) => {
    // Перебираем все кнопки
    button.addEventListener("click", (e) => {
      // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      popupBg.classList.add("active"); // Добавляем класс 'active' для фона
      popup.classList.add("active"); // И для самого окна
      button.classList.add("active"); // И для самого окна
      openPopupBlock.classList.add("active"); // И для самого окна
      bodyNoScroll.classList.add("active"); //
    });
  });

  closePopupButton.addEventListener("click", () => {
    // Вешаем обработчик на крестик
    popupBg.classList.remove("active"); // Убираем активный класс с фона
    popup.classList.remove("active"); // И с окна
    openPopupButtons.classList.remove("active");
    openPopupBlock.classList.remove("active");
    bodyNoScroll.classList.remove("active");
  });

  document.addEventListener("click", (e) => {
    // Вешаем обработчик на весь документ
    if (e.target === popupBg) {
      // Если цель клика - фот, то:
      popupBg.classList.remove("active"); // Убираем активный класс с фона
      popup.classList.remove("active"); // И с окна
      openPopupButtons.classList.remove("active");
      openPopupBlock.classList.remove("active");
      bodyNoScroll.classList.remove("active");
    }
  });
}
