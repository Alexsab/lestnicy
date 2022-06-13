
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
setImagesHeight();
window.addEventListener('resize', setImagesHeight);

require('fslightbox');