"use strict";

(function menu() {

  let elm = "header__mobile";
  let buttonName = "header__menu-button";
  let closeName = "header__menu-close";
  let closeIcon = "header__menu-icon";

  let button = document.querySelector(`.${buttonName}`);
  let close = document.querySelector(`.${closeName}`);
  let icon = document.querySelector(`.${closeIcon}`);
  let menu = document.querySelector(`.${elm}`);

  button.addEventListener("click", modal, false);
  close.addEventListener("click", modal, false);
  icon.addEventListener("click", modal, false);

  function modal(e) {

    let menu = document.querySelector(`.${elm}`);
    let hidingClass = "--hidden";

    if (e.target === button) {
      console.log("Show menu!");
      e.target.classList.add(`header__menu-button${hidingClass}`);
      close.classList.remove(`header__menu-close${hidingClass}`);
      menu.classList.remove(`header__mobile${hidingClass}`);
      document.body.style.overflow = "hidden";
    } else {
      console.log("Hide menu!");
      close.classList.add(`header__menu-close${hidingClass}`);
      button.classList.remove(`header__menu-button${hidingClass}`);
      menu.classList.add(`header__mobile${hidingClass}`);
      document.body.style.overflow = "";
    }

  }

}());
