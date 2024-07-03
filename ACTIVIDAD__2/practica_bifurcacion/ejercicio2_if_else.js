//Practica 2

/* Rea;izar un programa que resiva un numero y los muestre el dia de la semana que 
corresponda ese numero luner=1 martes=2*/

let numero = 7;
if(numero === 1){
    console.log(numero + "el dia es Lunes ");
}else if((numero === 2)){
    console.log(numero + "el dia es Martes");
}else if((numero === 3)){
    console.log(numero + "el dia es Miercoles");
}else if((numero === 4)){
    console.log(numero + "el dia es Jueves");
}else if((numero === 5)){
    console.log(numero + "el dia es viernes");
}else if((numero === 6)){
    console.log(numero + "el dia es sabado");
}else if((numero === 7)){
    console.log(numero + "el dia es Domingo");        
}else{
    console.log(numero + "error")
}