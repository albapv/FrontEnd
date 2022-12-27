//Constantes de acceso
const form = document.getElementById('form');
const usuario = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});

function checkInputs() {
	//Constantes campos
	const usuarioValue = usuario.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	//Variable para sumar validaciones
	var checkOk = 0;

	//Control de campo vacío nombre
	//Control carácter numérico no admitido en nombre
	if (/^([a-zA-Z ])*$/.test(usuarioValue) && usuarioValue !== '') {
		setSuccessFor(usuario);
		checkOk++;
		}
		else if (usuarioValue == '') {
			setErrorFor(usuario, 'Rellene este campo');

		}else {
		setErrorFor(usuario, 'Carácter numérico no admitido, introduzca letras');
	}

	//Control de campo vacío email
	if(emailValue === '') {
		setErrorFor(email, 'Rellene este campo');
	//Control de formato de email
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email invalido');
	} else {
		setSuccessFor(email);
		//Suma validación
		checkOk++;
	}
	
		//Control de campo vacío en clave
		//Control de caracteres máximos en clave
		if(passwordValue.length > 8 && passwordValue !== '') {
			setErrorFor(password, 'La clave debe tener como máximo 8 carácteres');
		}
			else if (passwordValue === ''){
				setErrorFor(password, 'Rellene este campo');
			}
			else {
			setSuccessFor(password);
			//Suma validación
			checkOk++;
		}
		
	
	//Control de campo vacío clave2
	if(password2Value === '') {
		setErrorFor(password2, 'Rellene este campo');
	//Control de coincidencia en contraseñas	
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
		//Suma validación
		checkOk++;
	}
	//Alert validación de formulario rellenado correctamente
	if (checkOk === 4){
		return alert("La inscripción ha sido correcta");
	}
	
	
}

//Funcion Incorrecto
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

//Funcion Correcto
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//Formato Email
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}