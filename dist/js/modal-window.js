document.addEventListener('DOMContentLoaded', () => {
	// Работа с modal-window
	const modalForm = document.querySelector('.modal-form');
	const modalFormWrapper = document.querySelector('.modal-form__wrapper');
	const modalFormClose = document.querySelector('.modal-form__close');
	const heroBtn = document.querySelectorAll('.hero-btn');
	const formBtn = document.querySelector('.form-btn');

	heroBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			modalForm.classList.remove('hidden');
		});
	});

	modalFormClose.addEventListener('click', () => {
		modalForm.classList.add('hidden');
	});

	formBtn.addEventListener('click', () => {
		modalForm.classList.remove('hidden');
	});

	modalFormWrapper.addEventListener('click', (e) => {
		if (e.target.classList.contains('modal-form__wrapper')) {
			modalForm.classList.add('hidden');
		}
	});
});
