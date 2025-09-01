var primeiro, razao, qtd;
primeiro=parseFloat(prompt("Digite o primeiro termo da PG:"));
razao=parseFloat(prompt("Digite a razão da PG:"));
qtd=parseInt(prompt("Digite a quantidade de termos da PG:"));
for(var i = 0; i < qtd; i++){
    var termo = primeiro * Math.pow(razao, i);
    document.write(termo + "<br>");
}
