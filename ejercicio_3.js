// Ejercicio 3 Dado un arreglo de strings que contiene los días de la semana, cree una función que le permita obtener un día en particular si se recibe su número correspondiente.
alert (obtenerDiaPorNumero(3));
function obtenerDiaPorNumero(numero) {
  let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
    if (numero >= 1 && numero <= 7) {
      return dias[numero - 1];
    } else {
      return "Número de día inválido";
    }
  }
