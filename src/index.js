import cipher from './cipher.js';

//console.log(cipher);
document.getElementById("buttonCifra").addEventListener("click",cifrar);
function cifrar (event) {
    event.preventDefault();
    let offset= document.getElementById("offset").value;
    let textBox= document.getElementById("box").value;
    console.log (offset);
    console.log (textBox);
    document.getElementById ("box2").innerHTML=textBox;

}
