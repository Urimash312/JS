var n = parseInt(prompt("Digite um número para calcular o fatorial:"));
var fatorial = 1;
for (var i = 1; i <= n; i++) {
    fatorial *= i;
}
document.write("O fatorial de " + n + " é: " + fatorial);
