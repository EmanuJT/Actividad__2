//practica 1
/* realizar un programa que revisa una calificacion y muestre una letra 
en pantalla de 
90 a 100 letra A 
80 a 89 letra B
70 a 790 letra C 
60 a 69 letra D 
y para el resto de la calificacion la letra F */
 //con if y con else 
 let numero = 99;
 if(numero >= 90 === numero <= 100){
     console.log(numero + "la letra es A");
 }else if((numero >= 80 === numero <= 89)){
     console.log(numero + "la letra es B");
 }else if((numero >= 70 === numero <= 79)){
     console.log(numero + "la letra es C");
 }else if((numero >= 60 === numero <= 69)){
     console.log(numero + "la letra es D");
 }else{
     console.log(numero + "la letra es F")
 }
 