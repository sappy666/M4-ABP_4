// Ejercicio 3 Dado un arreglo de strings que contiene los días de la semana, cree una función que le permita obtener un día en particular si se recibe su número correspondiente.
function getDayByNumber(days, number) {
    if (number >= 1 && number <= 7) {
      return days[number - 1];
    } else {
      return "Número de día inválido";
    }
  }