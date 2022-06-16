const menu = document.querySelector('.top-line');
const menuBtn = document.getElementById('nav-icon2');
menuBtn.addEventListener('click', () => {
	toggleClasses()
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

const toggleClasses = () => {
	menuBtn.classList.toggle('open')
	menu.classList.toggle('hidden')
	document.body.classList.toggle('no-scroll')
}

const scroll = () => {
	const anchors = document.querySelectorAll('a[href^="#"]');
	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const blockID = anchor.getAttribute('href').substr(1);
			if (blockID) {
				const parent = anchor.closest('.top-line');
				if(parent){
					toggleClasses()
				}
				// anchors.forEach(item => {
				// 	item.classList.remove('bg-accent', 'text-white');
				// })
				// anchor.classList.add('bg-accent', 'text-white');
				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			}
		})
	}
}
scroll()