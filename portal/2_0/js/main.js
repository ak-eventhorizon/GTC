'use strict';

var menuElements = document.getElementById("menu").children;
var contentPages = document.getElementById("content").children;



// при нажатии на кнопку меню с id "N" отображается страница содержимого с id "page-N"
// функция навешена на кнопки меню в html-коде
function showClickedPage(element) {

    //сброс со всех кнопок меню класа .current
    for (var i = 0; i < menuElements.length; i++) {
        menuElements[i].classList.remove("current");
    }

    //установка на такущую кнопку меню класса .current
    element.classList.add("current");

    // сокрытие всех страниц содержимого
    for (var i = 0; i < contentPages.length; i++) {
    contentPages[i].style.display = "none";
    }

    //отображение нужной страницы содержимого
    var targetPageID = "page-" + element.id;
    document.getElementById(targetPageID).style.display = "";
}