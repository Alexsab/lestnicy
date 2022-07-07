import lestnicy from './lestnicy'
document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
		phones: [
			{id: 1, phone: '8 (927) 260 02 77'},
			{id: 2, phone: '8 (846) 990 02 77'},
		],
		email: 'sammetok@yandex.ru',
		address: 'Самара, ул. Революционная, 101 А',
		lestnicy: lestnicy,
		typeModalShow(id){
			const type = lestnicy.find(t => t.id === id)
			const title = type.title ? type.title : 'Лестница № '+type.id
			this.$refs.typeImg.src = `img/types/${type.id}.png`
			this.$refs.typeImg.alt = title
			this.$refs.typeTitle.innerText = title
			this.$refs.typeDescr.innerText = type.descr
			this.$refs.typeImg.onload = () => {
				Alpine.store('state').isTypeModalOpen = true;
			}
			// console.log(this.$refs);
		},
		kitcut( text, limit) {
			text = text.trim();
			if( text.length <= limit) return text;
			text = text.slice( 0, limit); // тупо отрезать по лимиту
			let lastSpace = text.lastIndexOf(" ");
			if( lastSpace > 0) { // нашлась граница слов, ещё укорачиваем
				text = text.substr(0, lastSpace);
			}
			return text + "...";
		}
	}));
	Alpine.store('state', {
		menuOpen: false,
		isModalOpen: false,
		isTypeModalOpen: false,
		isResponseModalOpen: false
	})
})