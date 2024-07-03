let p = 17;
let des = 0;
let tol = 0;
if(p > 0 && p < 10){
    des = p * 0.05;
    console.log(des);
    tol = des * 0.16;
    console.log(tol);
}else if(p > 11 && p <= 20){
    des = p * 0.10;
    console.log(des);
    tol = des * 0.16;
    console.log(tol);
}else if(p >= 21){
    des = p * 0.15;
    console.log(des);
    tol = des * 0.16;
    console.log(tol);
}