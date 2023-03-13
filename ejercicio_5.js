// Ejercicio 5 Cree un programa que dado un arreglo de números desordenados los ordene ascendentemente.
function sortArray(array) {
    array.sort(function(a, b) {
      return a - b;
    });
    return array;
  }
  