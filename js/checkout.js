
// Exercise 6

function validate() {
	var error = 0;
  
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");  // Corrige el ID a fAddress
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");
  
	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress");  // Corrige el ID a errorAddress
	var errorLastN = document.getElementById("errorLastN");
	var errorPassword = document.getElementById("errorPassword");  // Corrige el ID a errorPassword
	var errorPhone = document.getElementById("errorPhone");
  
	// Validación de nombre y apellido (solo letras y mínimo 3 caracteres)
	
	if (fName.value.length < 3 || !/^[A-Za-z]+$/.test(fName.value)) {
	  error++;
	  fName.classList.add("is-invalid");
	  errorName.style.display = "block";
	} else {
	  fName.classList.remove("is-invalid");
	  errorName.style.display = "none";
	}
  
	
	if (fLastN.value.length < 3 || !/^[A-Za-z]+$/.test(fLastN.value)) {
	  error++;
	  fLastN.classList.add("is-invalid");
	  errorLastN.style.display = "block";
	} else {
	  fLastN.classList.remove("is-invalid");
	  errorLastN.style.display = "none";
	}
  
	// Validación de dirección (mínimo 3 caracteres)
	if (fAddress.value.length < 3) {
	  error++;
	  fAddress.classList.add("is-invalid");
	  errorAddress.style.display = "block";
	} else {
	  fAddress.classList.remove("is-invalid");
	  errorAddress.style.display = "none";
	}
  
	// Validación de email
	var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
	if (!fEmail.value.match(emailRegex)) {
	  error++;
	  fEmail.classList.add("is-invalid");
	  errorEmail.style.display = "block";
	} else {
	  fEmail.classList.remove("is-invalid");
	  errorEmail.style.display = "none";
	}
  
	// Validación de contraseña (mínimo 4 caracteres, máximo 8, letras y números)
	var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/;
	if (!fPassword.value.match(passwordRegex)) {
	  error++;
	  fPassword.classList.add("is-invalid");
	  errorPassword.style.display = "block";
	} else {
	  fPassword.classList.remove("is-invalid");
	  errorPassword.style.display = "none";
	}
  
	// Validación de teléfono (solo números y mínimo 3 dígitos)
	var phoneRegex = /^[0-9]{3,}$/;
	if (!fPhone.value.match(phoneRegex)) {
	  error++;
	  fPhone.classList.add("is-invalid");
	  errorPhone.style.display = "block";
	} else {
	  fPhone.classList.remove("is-invalid");
	  errorPhone.style.display = "none";
	}
  
	// Detiene el envío del formulario si hay errores
	if (error > 0) {
	  return false;
	}
  
	alert("Formulario validado con éxito");
  }
  
