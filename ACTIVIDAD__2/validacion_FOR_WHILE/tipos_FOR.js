// FOR 

/* 
Su estructura lleva una inicializacion una condicion y una actualizacio o
icremento 

for(inicializacion; condicion; actualizacion){
    Bucle
}
    let i = 0;
    i = i + i;
    i += i;

    i++
    i--
*/

//Tipos de for

//for
for(let i = 0; i < 10; i++){
    //Aqui va un bucle
    console.log(i)
}
let lista = [1, 4, 6, 8, 10, 15, 18]
for(let i = 0; i < lista.length /* Llongitud de la cadena */; i++){
    console.log(lista[i]);
}

//for...of
for (let valor of lista){
    /* metodo mas resumido para mostrar los valores*/ 
    console.log(valor);
}


//for...in
let persona = {
    nombre = "EmanuTY",
    apellido = "Aramid",
    edad = 22,
    isDeveloper = true
}

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}

//forEach
// los valores no salen 
lista.forEach(valor => /* esta es una Arrow function*/{
    console.log(valor);
})

