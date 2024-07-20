// comparaciones 

//Igualdad 
if (5 == 5){
    console.log("Es igual a 5");
}

if (5 === 5){
    console.log("Es igual a 5");
}

let a = 5;
console.log(typeof a);
//let b = 5;
let b = "5";
console.log(typeof b);

if (a == b){
    console.log("a igual que b DEBIL");
}
if (a === b){
    console.log("a igual que b FUERTE");
}

//Desigualades 
// 
let c = 4;
let d = "4";

if(c != d){//para representar que es diferente a d
    console.log("c diferente que d DEBIL")
}
if(c !== d){//para representar que es igual a d
    console.log("c diferente que d FUERTE")
}

//mayor que menor que 

let max = 10;
let min = 5;

if(max > min){
    console.log("max es mayor que min");
}

if(max >= min){
    console.log("max es mayor o igual que min");
}

if(min < max){
    console.log("min es menor que max");
}

if(min <= max){
    console.log("min es menor o igual que max");
}