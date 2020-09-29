'use strict';

var button = document.querySelector('.button');
console.log('button', button);
var scroll;
var scrollSafari;
window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  console.log('scrollTop', document.documentElement.scrollTop);

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.opacity = 1;
  } else {
    button.style.opacity = 0;
  }
}

button.addEventListener('click', function () {
  document.body.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
  document.documentElement.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
});
//# sourceMappingURL=index.js.map
