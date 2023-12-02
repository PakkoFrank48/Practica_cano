let promedio = (parcial1, parcial2, parcial3) => {
  let suma = parcial1 + parcial2 + parcial3;

  if (!esValido(parcial1) || !esValido(parcial2) || !esValido(parcial3))
    return console.log("valor incorrecto");

  if (parcial1 < 6 || parcial2 < 6 || parcial3 < 6)
    return console.log("reprobado automaticamente");

  if (suma < 24) return console.log("reprobado, puntos: " + suma);

  console.log("Aprobado, puntos: " + suma);

  function esValido(a) {
    if (a > 10 || a < 0) return false;
    else return true;
  }
};

let parcial1 = -1;
let parcial2 = 8;
let parcial3 = 8;

let resultado = promedio(parcial1, parcial2, parcial3);

//funcion que le des tus calificaciones de 3 parciales (3 numeros) y te diga si vas
//a hacer ordinario o nel
//nota: te vas a ordi si no alcanzas 24 puntos en total o si en alguna parcial sacaste menos de 6
//nota: valida que las calificaciones sean validas
