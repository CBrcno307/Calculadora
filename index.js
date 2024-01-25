let pergunta = prompt("Escolha \n1 - Para somar \n2 - Para subtrair \n3 - Para dividir \n4 - Para multiplicação \n5 - Para potenciação ")

switch(pergunta){
case "1":
  console.log(somar())

function somar(){
  let num1 = Number(prompt("Escolha o primeiro valor"))
  let num2 = Number(prompt("Escola o segundo valor"))
  console.log(num1 + num2)
  
}
break;

case "2":
  console.log(subtrair())

function subtrair(){
  let num1 = Number(prompt("Escolha o primeiro valor"))
  let num2 = Number(prompt("Escola o segundo valor"))
  console.log(num1 - num2)
  
}
break;

case "3":
  console.log(dividir())

function dividir(){
  let num1 = Number(prompt("Escolha o primeiro valor"))
  let num2 = Number(prompt("Escola o segundo valor"))
  console.log(num1 / num2)
  
}
break;

case "4":
  console.log(multiplicação())

function multiplicação(){
  let num1 = Number(prompt("Escolha o primeiro valor"))
  let num2 = Number(prompt("Escola o segundo valor"))
  console.log(num1 * num2)

}
break;
case "5":
  console.log(potenciar())

function potenciar(){
  let num1 = Number(prompt("Escolha o  valor que deseja potenciar"))
  console.log(num1 * num1)

}
break;
}
