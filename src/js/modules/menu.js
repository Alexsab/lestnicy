const menu = document.querySelector('.top-line');
const menuBtn = document.getElementById('nav-icon2');
menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('open')
	menu.classList.toggle('hidden')
	document.body.classList.toggle('no-scroll')
})
const setMenuHeight = () => {
	if(window.innerWidth < 768){
		let a = document.querySelector('header').offsetHeight;
		menu.style.height = `calc(100vh - ${a}px)`;
	}else{
		menu.style = '';
	}
}
setMenuHeight();
window.addEventListener('resize', setMenuHeight);