//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
//  Aqui você deverá desenvolver a lógica para resolver o problema.


let amzrnames = []



function sortearAmigo(){

if(amzrnames.length === 0 ){
   alert('esta sorteando algo que nao existe? kkkk')
} else{
   const random_i= Math.floor(Math.random() * amzrnames.length)
   const sorteado = amzrnames[random_i]
   let select_r = document.getElementById('resultado')
   select_r.textContent = `O amigo secreto e: ${sorteado}`

}

}

function adicionarAmigo(){
let catchtext = document.getElementById('amigo')
let catchvaluetxt  = catchtext.value 
//caputrar valor de entrada
 
 if(catchvaluetxt === "" || !isNaN(catchvaluetxt) ){
   alert("Por favor, insira um nome valido")
 }else{
   amzrnames.push(catchvaluetxt)
   console.log(amzrnames)
   let create_v = document.createElement('li')
   let select_v = document.getElementById("listaAmigos")
   select_v.appendChild(create_v)
   create_v.textContent += catchvaluetxt
   
   document.getElementById('amigo').value = ""
 }
   
}