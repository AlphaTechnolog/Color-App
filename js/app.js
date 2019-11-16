// Variables globales
let btnYellow = document.querySelector('#yellow'),
	btnBlue = document.querySelector('#blue'),
	btnRed = document.querySelector('#red'),
	btnGreen = document.querySelector('#green'),
	btnPurple = document.querySelector('#purple');

// Classes
class SetTxPageColor {
	constructor(txColor) {
		document.body.style.color = txColor;
	}
}

class SetBGPageColor {
	constructor(bgColor) {
		if (bgColor != 'white') {
			document.body.style.background = bgColor;
			new SetTxPageColor('white');
		}
		else {
			document.body.style.background = bgColor;
			new SetTxPageColor('black');
		}
	}
}

class GuardarLS {
	constructor(key, value) {
		localStorage.setItem(key, value);
	}
}

class ObtenerLS {
	constructor(key) {
		if (localStorage.getItem(key)) {
			// Si existe el dato
			return localStorage.getItem(key);
		}
		else {
			// No existe el dato
			throw `El dato que se intenta obtener no existe, dato: ${key}`;
		}
	}
}

// EventsListeners
