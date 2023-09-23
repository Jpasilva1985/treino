let sliderElement = document.querySelector("#slider");
let button = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let senha = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");


let charset = "abcdefghijlmnopqrstuvxzwy123456789"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.Value;

slider.oninput = function () {
    sizePassword.innerHTML= this.Value
}

function generatePassoword() {
       let pass = "";
       for(let i = 0, n = charset.length;i< sliderElement.Value;++i){
            pass += charset.charAt(Math.floor(Math.random() * n))
       }

   
       console.log(pass);
}