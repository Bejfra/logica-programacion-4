let num1 = 0, num2 = 1, numNext, numFibo;
const arr=[];

function fibonacci(numFibo){
    let number = parseInt(prompt('Ingrese la cantidad de veces que desea generar la secuencia Fibonacci: '));
if(Number.isNaN(number)){
    alert("Por favor ingrese datos númericos");
    fibonacci(number);
}else{
    for (let i = 1; i <= number; i++) {
    arr.push(num1);
    numNext = num1 + num2;
    num1 = num2;
    num2 = numNext;
    }
    alert(arr);
}
}
fibonacci(numFibo);