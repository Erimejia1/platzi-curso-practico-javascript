

let valor = 0; //Actualmente se recomiendo utilizar ??, una evolución espiritual de ||, ya que devuelve en ciertas circunstancias falsos negativos con "" o 0.
console.log(valor ?? "Alterno")

let valor = 0;
console.log(valor || "Alterno")


let valor = 0;
console.log((valor ?? "Alterno") && (valor || "Alterno"));



for (let index = 10; index >= 2; index--) {
    console.log("El valor de i es: " + index)
}