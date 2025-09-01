var primeiro, razao, qtd;
primeiro=parseInt(prompt("Digite o primeiro termo da PA:"));
razao=parseInt(prompt("Digite a razão da PA:"));
qtd=parseInt(prompt("Digite a quantidade de termos da PA:"));
for(var i = 0; i < qtd; i++){
    var termo = primeiro + i * razao;
    document.write(termo + "<br>");
}