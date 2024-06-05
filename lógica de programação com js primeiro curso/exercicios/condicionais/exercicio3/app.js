let resposta = prompt("quem descobriu o brasil");
let pontos = 0;
if(resposta == "indiginas"){
    pontos += 100;
}
if(pontos >= 100){
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
}
