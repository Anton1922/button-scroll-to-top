'use strict';

const button = document.querySelector('.button');
console.log('button', button);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		button.style.display = 'flex';
	} else {
		button.style.display = 'none';
	}
}

button.addEventListener('click', () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
});
