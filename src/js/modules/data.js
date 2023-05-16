import lestnicy from './lestnicy'
import galary from './galary'
import faqs from './faqs'

document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
		phones: [
			{ id: 1, phone: '8 (927) 260 02 77' },
			{ id: 2, phone: '8 (846) 990 02 77' },
		],
		email: 'sammetok@yandex.ru',
		address: 'Самара, ул. Аэропорт-2, лит Ж',
		lestnicy: lestnicy,
		galary: galary,
		faqs: faqs,
		typeModalShow(id) {
			const type = lestnicy.find((t) => t.id === id)
			const title = type.title ? type.title : 'Лестница № ' + type.id
			// this.$refs.typeImgLink.href = `img/types/${type.id}.png`
			this.$refs.typeImg.src = `img/types/thumbs/${type.id}.png`
			this.$refs.typeImg.alt = title
			this.$refs.typeTitle.innerText = title
			this.$refs.typeDescr.innerText = type.descr
			this.$refs.typeInputTitle.value = title
			this.$refs.typeForm.reset()
			this.$refs.typeImg.onload = () => {
				Alpine.store('state').isTypeModalOpen = true
				refreshFsLightbox()
			}
		},
		kitcut(text, limit) {
			text = text.trim()
			if (text.length <= limit) return text
			text = text.slice(0, limit)
			let lastSpace = text.lastIndexOf(' ')
			if (lastSpace > 0) {
				text = text.substr(0, lastSpace)
			}
			return text + '...'
		},
	}))
	Alpine.store('state', {
		isModalOpen: false,
		isTypeModalOpen: false,
		isResponseModalOpen: false,
	})
})
