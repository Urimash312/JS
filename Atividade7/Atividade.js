var qtd;
qtd=parseInt(prompt("Digite a quantidade de elementos da série de Fibonacci:"));
var a=1, b=1, proximo;
if (qtd>=1)document.write(a + " ");
if (qtd>=2)document.write(b + " ");
for (var i=3; i <=qtd; i++) {
    proximo=a+b;
    document.write(proximo + " ");
    a=b;
    b=proximo;
}
