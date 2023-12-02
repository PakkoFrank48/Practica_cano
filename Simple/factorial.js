let factorial = (numero) => {
  let r = 1;

  for (let i = numero; i > 0; i--) {
    r *= i;
    console.log(r);
  }
};

let numero = 5;

let resultado = factorial(numero);

//console.log(r);

//funcion que le des un numero y te regrese su factorial
//ej. el factorial de 5 es 120 ya que 5*4*3*2*1 = 120
