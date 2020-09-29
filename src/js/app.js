'use strict';

const button = document.querySelector('.button');

function scrollFunction() {
	console.log('scrollTop', document.documentElement.scrollTop);
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button.style.opacity = 1;
	} else {
		button.style.opacity = 0;
	}
}

window.addEventListener('scroll', scrollFunction);

button.addEventListener('click', () => {
	document.body.scrollIntoView({block: 'start', behavior: 'smooth'});
	document.documentElement.scrollIntoView({block: 'start', behavior: 'smooth'});
});
