// Clases
class SetBgPageColor {
	constructor(bg, txColor) {
		document.body.style.background = bg
		document.body.style.color = txColor

		// Guardando en el localStorage el color del bg y de las letras que se debe mostrar al recargar la página

		this.guardarLocalStorage('bg-color', bg)
		this.guardarLocalStorage('tx-color', txColor)
	}

	guardarLocalStorage(key, value) {
		localStorage.setItem(key, value)
	}
}

class SetPageBgLS {
	constructor() {
		if (localStorage.getItem('bg-color') && localStorage.getItem('tx-color')) {
			document.body.style.background = localStorage.getItem('bg-color')
			document.body.style.color = localStorage.getItem('tx-color')
		} else {
			document.body.style.background = 'white'
			document.body.style.color = 'black'
		}
	}
}

// Variables globales
let btnYellow = document.querySelector('#yellow');
let btnBlue = document.querySelector('#blue');
let btnRed = document.querySelector('#red');
let btnGreen = document.querySelector('#green');
let btnPurple = document.querySelector('#purple');

// EventsListeners
btnYellow.addEventListener('click', () => {
	new SetBgPageColor('yellow', 'white');
});

btnBlue.addEventListener('click', () => {
	new SetBgPageColor('blue', 'white');
});

btnRed.addEventListener('click', () => {
	new SetBgPageColor('red', 'white');
});

btnGreen.addEventListener('click', () => {
	new SetBgPageColor('green', 'white');
});

btnPurple.addEventListener('click', () => {
	new SetBgPageColor('purple', 'white');
});

window.addEventListener('load', () => {
	console.log("This page has been loaded success");
	new SetPageBgLS();
})