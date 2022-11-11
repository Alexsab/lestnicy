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

{url: 'img/about/10.jpg', thumb: 'img/about/10.jpg'},
	{url: 'img/about/44.jpg', thumb: 'img/about/44.jpg'},
	{url: 'img/about/5.jpg', thumb: 'img/about/5.jpg'},
{url: 'img/about/45.jpg', thumb: 'img/about/45.jpg'},
	{url: 'img/about/6.jpg', thumb: 'img/about/6.jpg'},
	{url: 'img/about/7.jpg', thumb: 'img/about/7.jpg'},
{url: 'img/about/76.jpg', thumb: 'img/about/76.jpg'},
	{url: 'img/about/9.jpg', thumb: 'img/about/9.jpg'},
]
export default galary