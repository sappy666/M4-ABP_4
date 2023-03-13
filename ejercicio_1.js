// Ejercicio 1 Cree una función que dado un número n cree un arreglo de largo n, donde en cada posición del arreglo este el doble del anterior nota, el primer elemento del arreglo es 1
function createArray(n) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
      arr.push(arr[i-1] * 2);
    }
    return arr;
  }