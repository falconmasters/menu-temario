document.querySelectorAll('#temario .lista a').forEach((elemento) => {
	elemento.addEventListener('click', () => {
		document.querySelector('#temario .activo').classList.remove('activo');
		elemento.parentElement.classList.add('activo');
	});
});