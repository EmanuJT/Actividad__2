var a = 1;
var b = 500;

for (a; a <= b; a++){
    var con=0;
    for(var m=1; m<=a; m++){
        if(a%m==0){
            con++
        }
        
    }if (con==2){
    console.log(a);
    }
}