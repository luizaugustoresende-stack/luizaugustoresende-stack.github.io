function buscar(){
let input=document.getElementById("busca").value.toLowerCase();
let itens=document.querySelectorAll("#lista li");
itens.forEach(li=>{
li.style.display=li.innerText.toLowerCase().includes(input)?"block":"none";
});
}
