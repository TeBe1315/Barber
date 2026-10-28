const barsBtn = document.querySelector('.menu')
const menuItem = document.querySelector('.nav-menu')

barsBtn.addEventListener('click', () => {
	menuItem.classList.toggle('show-menu')
})
