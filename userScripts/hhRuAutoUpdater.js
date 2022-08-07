// ==UserScript==
// @name hh.ru resume updater
// @description HH.RU resume updater by automaticaly clicking (or trying to click) specific links on page with defined interval
// @author L.A.P.S.
// @license MIT
// @version 1.0
// @include https://tosno.hh.ru/applicant/resumes?hhtmFromLabel=header&hhtmFrom=main
// @include https://hh.ru/applicant/resumes?hhtmFromLabel=header&hhtmFrom=main
// ==/UserScript==

setInterval(hhRuResumeUpdater, 60000);

function hhRuResumeUpdater() {
  console.log('hhRuResumeUpdater() started...');
  const resumeUpdateLinks = document.querySelectorAll('.bloko-link');
  if (resumeUpdateLinks) {
    resumeUpdateLinks.forEach(link => {
      if (link.textContent === 'Поднять в поиске') {
        link.click();
        console.log('link is clicked succesfully!');
      	} else {
          console.log('Link textContent is wrong');
        }
      });
    }
	}
