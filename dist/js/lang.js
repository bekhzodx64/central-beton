document.addEventListener('DOMContentLoaded', () => {
	const langLink = document.querySelector('.lang-link');
	const langMenu = document.querySelector('.lang-menu');

	langLink.addEventListener('click', (e) => {
		e.preventDefault();

		langMenu.classList.toggle('hidden');
	});
});
