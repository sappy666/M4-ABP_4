// Ejercicio 1 Construya una función que dado un número n entero y menor que 100 calcule la sumatoria de 1 hasta n.

function crearArreglo(n) {
  let arr = [];
  let valor = 1;
  for (let i = 0; i < n; i++) {
    arr.push(valor);
    valor *= 2;
  }
  return arr;
}
