var dataAtual = new Date();
console.log("Data atual: " + dataAtual);
console.log(" ");

let dataEvento = new Date(12, 25, 2022);
console.log("Informe a data do evento: " + dataEvento);

let idade = 18;
if (dataEvento < dataAtual){

    console.log("data correta");
}
else {
    console.log("data inválida");
}

console.log("informe a sua idade: " + idade);

if (idade >= 18) {
    console.log("Entrada permitida");
}
else {
    console.log("Entrada não permitida");
}

let listaParticipantes = ["Ana", "Pedro",   "Joana", "Maria"];


let qtdMaxParticipantes = 100;
contador = listaParticipantes.length;
   while (contador !== qtdMaxParticipantes) 
  {    
            listaParticipantes[contador] = "novo participante";
            
            contador++
  }
   
     console.log(listaParticipantes);

     console.log(listaParticipantes.length);

     if(qtdMaxParticipantes === 100 ){

        console.log("Número máximo de participantes atingido. Não permitir a venda de mais ingresssos")
     }