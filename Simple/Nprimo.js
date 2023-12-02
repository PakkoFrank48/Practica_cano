let primo = (nValor) => {
  var i = 0;
  var primo = true;

  for (i = 2; i < nValor; i++) {
    if (nValor % i == 0) {
      primo = false;
    }
  }

  if (primo == true) {
    console.log("El numero " + nValor + " es primo");
  } else {
    console.log("El numero " + nValor + " no es primo");
  }
};

let nValor = 7;
let resultado = primo(nValor);

//funcion que le des un numero y te diga si es primo o no
//nota: un numero es primo si solo es divisible entre 1 y el mismo numero
//ej. 7  es primo ya que solo se puede dividir entre 1 y 7 y nada mas
//8 NO es primo ya que puede dividirse entre 1, 2, 4 y 8
