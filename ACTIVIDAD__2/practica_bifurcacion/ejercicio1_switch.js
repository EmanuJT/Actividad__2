let numero = 7;
switch(true){ //hace multiples comparacion con el mismo valor
    case(numero >= 90 === numero <= 100):
    console.log(letra + "la letra es A");
    case(numero >= 80 === numero <= 89):
    console.log(letra + "la letra es B");
    break;
    case(numero >= 70 === numero <= 79):
    console.log(letra + "la letra es C");
    break;
    case(numero >= 60 === numero <= 69):
    console.log(letra + "la letra es D");
    default:
        console.log(letra + "la letra es F");
        break;
}