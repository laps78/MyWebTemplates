// ==UserScript==
// @name hh.ru resume updater
// @description HH.RU resume updater by automaticaly clicking (or trying to click) specific links on page with defined interval
// @author L.A.P.S.
// @license MIT
// @version 1.0
// @include https://tosno.hh.ru/applicant/resumes?hhtmFromLabel=header&hhtmFrom=main
// @include https://hh.ru/applicant/resumes?hhtmFromLabel=header&hhtmFrom=main
// ==/UserScript==
// [1] Оборачиваем скрипт в замыкание, для кроссбраузерности (opera, ie)
(function (window, undefined) {  // [2] нормализуем window
  var w;
  if (typeof unsafeWindow != undefined) {
      w = unsafeWindow
  } else {
      w = window;
  }

  // [3] не запускаем скрипт во фреймах
  // без этого условия скрипт будет запускаться несколько раз на странице с фреймами
  if (w.self != w.top) {
      return;
  }
  
  //url list
  const resumeListUrl = 'https://tosno.hh.ru/applicant/resumes?hhtmFromLabel=header&hhtmFrom=main';
  
  //start additional url checkout...
  if (window.location.href === resumeListUrl) {
    console.log('HH.RU location detected. Starting user actions: hhRuResumeUpdater()...');
    const updateInterval = setInterval(hhRuResumeUpdater(), 30000);
    }

  function hhRuResumeUpdater() {
    console.log('hhRuResumeUpdater() started...');
    const resumeUpdateLinks = document.querySelectorAll('.bloko-link');
    if (resumeUpdateLinks) {
      resumeUpdateLinks.forEach(link => link.click());
      console.log('links are clicked succesfully!');
    }
  }
})(window);