const setImagesHeight = () => {
	const images = document.querySelectorAll('.galary-item');
	if(images.length){
		images.forEach(img => {
			img.style.cssText = `
			height: ${img.parentElement.offsetWidth}px; 
			width: ${img.parentElement.offsetWidth}px
			`;
		})
	}
}
setTimeout(() => {
	setImagesHeight();
	refreshFsLightbox()
})
window.addEventListener('resize', setImagesHeight);

require('fslightbox');

const galary = [
	{url: 'img/about/1.png', thumb: 'img/about/1.png'},
	{url: 'img/about/2.jpg', thumb: 'img/about/2.jpg'},
	{url: 'img/about/3.jpg', thumb: 'img/about/3.jpg'},
	{url: 'img/about/1.png', thumb: 'img/about/1.png'},
	{url: 'img/about/2.jpg', thumb: 'img/about/2.jpg'},
	{url: 'img/about/3.jpg', thumb: 'img/about/3.jpg'},
	{url: 'img/about/1.png', thumb: 'img/about/1.png'},
	{url: 'img/about/2.jpg', thumb: 'img/about/2.jpg'},
]
export default galary