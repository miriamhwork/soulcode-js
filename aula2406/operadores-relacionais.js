/* 
    Operadores relacionais -> boolean

    < Menor que
    > Maior que
    <= Menor ou igual
    >= Maior ou igual
    == Igual a 
    === Igual a e o mesmo tipo 
    != Diferente
    !== Diferente e mesmo tipo

 */

let a = 3;
let b = 5;

console.log(a < b); // true
console.log(a > b); // false
console.log(b > a); // true
console.log(b >= a); // true
console.log(b >= 5); // true
console.log(a <= b); // true
console.log(a <= 3); // true
console.log(b > 5); // true
console.log(a == b); // false
console.log(a != b); // true

console.log(a == "3"); // true, possuem o mesmo valor mesmo sendo tipos diferentes

//Estritamente igual: compara valor e o tipo
console.log(a === "3"); //false, possuem tipos diferentes

// Estritamente diferente
console.log(a != "3"); //false
console.log(a !== "3"); //true, são diferentes em tipo
