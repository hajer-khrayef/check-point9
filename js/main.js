let likes = document.getElementsByClassName("like")
console.log(likes)
for (const like of likes) {
    like.addEventListener("click", function() {
//like.classList.toggle("active1")
console.log(parseInt(like.nextElementSibling.innerHTML)+1)
       if(like.style.color == "red"){
            like.style.color = "black";
            like.nextElementSibling.innerHTML = parseInt(like.nextElementSibling.innerHTML) -1 + " likes"
        }
        else{
        like.style.color = "red";
        like.nextElementSibling.innerHTML = parseInt(like.nextElementSibling.innerHTML) +1 + " likes"
    }
        
    })
  
}
//add quantity
let btnsplus = document.querySelectorAll(".plus")
for (const btnplus of btnsplus) {
    btnplus.addEventListener("click", function() {
        btnplus.nextElementSibling.innerHTML++
        totale()

    })
}
//remove quantity
let btnsmoins = document.querySelectorAll(".moins")
for (const btnmoins of btnsmoins) {
    btnmoins.addEventListener("click", function() {
        if(btnmoins.previousElementSibling.innerHTML>0){
        btnmoins.previousElementSibling.innerHTML--
    totale()
}

        else{
            alert("oops")
        }
    })
}
//delete item
let btnsremove = document.querySelectorAll(".close")
for (const btnremove of btnsremove) {
    btnremove.addEventListener("click", function() {
      console.log(btnremove.parentNode.parentNode.remove())
      totale()
    })
}
console.log(btnsremove)
function totale() {
    let qtes = document.querySelectorAll(".qte")
let prices = document.querySelectorAll(".Price")
let somme =0;
//console.log(parseInt(prices[0].innerHTML))
//console.log(qtes[0].innerHTML)
for (let i = 0; i < qtes.length; i++) {
    somme += parseInt(prices[i].innerHTML)*qtes[i].innerHTML;      
} 
document.getElementById("totale").innerText= "Somme Totale : " +somme+"dt" ;
console.log(somme);
}

