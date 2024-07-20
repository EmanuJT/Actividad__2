let i = 1;
let resultado ;

do {
  let j = 1;
  do {
    resultado = i * j;
    console.log(i + " x " + j + " = " + resultado);
    j++;
  } while (j <= 10);
  console.log("---------------");
  i++;
} while (i <= 10);