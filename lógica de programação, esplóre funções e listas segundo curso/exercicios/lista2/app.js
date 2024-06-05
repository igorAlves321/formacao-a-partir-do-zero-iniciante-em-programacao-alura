//Criar uma função que exibe "Olá, mundo!" no console.
function exibir(){
console.log("olá mundo.");
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
console.log("olá"+nome+);
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibirDobro(numero){
return parseInt( numero * 2);
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(num1, num2, num3){

let media = (num1 + num2 + num3)/3;
return media;
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(num1, num2){
if(num1 > num2){
console.log(num1);
}else{
console.log(num2);
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicar(num1){
return parseInt (num1 * num1);
}