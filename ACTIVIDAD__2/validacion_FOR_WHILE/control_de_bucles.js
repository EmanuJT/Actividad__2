//Control de bucles

let lisNum = [1, 2, 3, 5, 6, 7, 8, 9];
for (let i = 0; i < lisNum.length; i++){
    //Exclusion de un numero
    if (lisNum[i] === 5){
        continue;
    }

    console.log(lisNum[i]);

    //Interrumpir un bucle
    if(lisNum[i] > 5){
        break;
    }
}