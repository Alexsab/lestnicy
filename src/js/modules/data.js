import lestnicy from './lestnicy'
document.addEventListener('alpine:init', () => {
	Alpine.data('data', () => ({
		phones: [
			{id: 1, phone: '8 (927) 260 02 77'},
			{id: 2, phone: '8 (846) 990 02 77'},
		],
		email: 'sammetok@yandex.ru',
		address: 'Самара, ул. Революционная, 101 А',
		lestnicy: lestnicy
	}));
	Alpine.store('state', {
		menuOpen: false,
		isModalOpen: false,
		isResponseModalOpen: false
	})
})