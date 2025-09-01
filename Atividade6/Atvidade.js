var inicio;
inicio=parseInt(prompt("Digite o valor inicial da série (maior que 1):"));
if(inicio<1){
    document.write("Valor inválido. Deve ser maior ou igual a 1.");
} else {
    for (var i = inicio; i >= 1; i--) {
        document.write(i);
        if (i > 1) {
            document.write(", ");
        }
    }
}