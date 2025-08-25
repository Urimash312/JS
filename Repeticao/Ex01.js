var cont, resposta
cont=0
while(cont<10)
    {
    alert("Irritanto o usuario com while" + cont + "vezes")
    cont++
}
for(cont=0; cont<10; cont++)
{
    alert("Agora Irritanto com for" + cont + "vezes")
}
do{
   resposta=confirm("Deseja Continuar?") 
}while(resposta==true)