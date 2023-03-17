// Ejercicio 4 Cree una función que le permita buscar un elemento contenido en el arreglo. Nota: el arreglo solo contendrá números, y tendrá un largo máximo de 100.

function searchInArray(array, element) {
    if (array.length > 100) {
      return "El arreglo es demasiado grande";
      alert("El arreglo es demasiado grande");
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i] === element) {
        return "El elemento está en la posición " + i;
      }
    }
    return "El elemento no se encuentra en el arreglo";
  }
  