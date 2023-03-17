// Ejercicio 5 Cree un programa que dado un arreglo de números desordenados los ordene ascendentemente.
let arreglo = [2,4,6,1,9,-3,0,-2];
console.log (sortArray (arreglo));
function sortArray(array) {
    array.sort((a, b) => a - b);
    return array;
  }
  
