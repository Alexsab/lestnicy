const $$ = function (name) { return document.querySelectorAll(name) };

function maskphone(e) {
	let num = this.value.replace(/^(\+7|8)/g, '').replace(/\D/g, '').split(/(?=.)/),
			i = num.length;
	if (0 <= i) num.unshift('+7');
	if (1 <= i) num.splice(1, 0, ' ');
	if (4 <= i) num.splice(5, 0, ' ');
	if (7 <= i) num.splice(9, 0, '-');
	if (9 <= i) num.splice(12, 0, '-');
	if (11 <= i) num.splice(15, num.length - 15);
	this.value = num.join('');
	if (num.length == 1 && num[0] == "") {
		this.parentElement.querySelector('small').classList.remove('hidden');
		this.parentElement.querySelector('small').innerText = 'Поле обязательно для заполнения';
		return;
	} else if(num.length != 15 || [... new Set(num)].length == 1) {
		this.parentElement.querySelector('small').classList.remove('hidden');
		this.parentElement.querySelector('small').innerText = 'Некорректный номер телефона';
		return;
	}
	this.parentElement.querySelector('small').classList.add('hidden');
};
$$("input[name=phone]").forEach(function (element) {
	element.addEventListener('focus', maskphone);
	element.addEventListener('input', maskphone);
});

$$("input[name=agree]").forEach(function (element) {
	let mes = element.parentElement.parentElement.querySelector('small')
	element.addEventListener('change', e => {
		if(!e.target.checked){
			mes.classList.remove('hidden')
		}else{
			mes.classList.add('hidden')
		}
	});
});