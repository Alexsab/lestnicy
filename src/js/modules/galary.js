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
]
export default galary