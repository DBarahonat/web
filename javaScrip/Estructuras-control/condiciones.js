let n=0,print ='';
/*
if (n%2==0) {
    print=`El numero ${n} Es par `
    console.log('se cumple la condicion')
}else
{
    print=`El numero ${n} Es impar `
}
*/
//condiciones anidadas

if (n%2 !==0) {
    if(n>0){
        if (n%2==0) {
            print=`El numero ${n} Es par positivo`
            
        }else
        {
            print=`El numero ${n} Es impar positivo`
        }
    }else{
        if (n%2==0) {
            print=`El numero ${n} Es par negativo`
            
        }else{
            print=`El numero ${n} Es impar negativo`
        }
    }
}else{
    print=`El numero ${n} Es cero `
}

console.log(print)