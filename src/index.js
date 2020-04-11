import cipher from './cipher.js';

//console.log(cipher);
document.getElementById("buttonCifra").addEventListener("click",cifrar);
function cifrar (event) {
    event.preventDefault();
    let offset= Number(document.getElementById("offset").value);
    let textBox= document.getElementById("box").value.toUpperCase();
    document.getElementById ("box2").innerHTML=cipher.encode(offset,textBox);
      
}


document.getElementById("buttonDecifra").addEventListener("click",decifrar);
function decifrar (event) {
    event.preventDefault();
    let offset= Number(document.getElementById("offset").value);
    let textBox= document.getElementById("box").value.toUpperCase();
    document.getElementById ("box2").innerHTML=cipher.decode(offset,textBox);
      
}
