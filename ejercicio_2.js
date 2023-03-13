// Ejercicio 2 Cree una función que dado un arreglo de números de largo 10 permita obtener el mayor número contenido en el arreglo
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }