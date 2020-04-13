const cipher = {
  encode: function (offset, textBox) {
    if (offset =="" || textBox==""||typeof offset!=="number" ||typeof textBox!=="string"){    
      throw new TypeError('Digite uma senha válida ou confirme se sua mensagem está correta.')
    }
    let resultado = "";
    for (let letra = 0; letra< textBox.length; letra++) {
      let num = textBox.charCodeAt(letra); //funcao que transforma letra em numero da tabela asc
      let codigo = (num - 65);
      let deslocamento = (((codigo + offset)%26)+ 65); 
      resultado += String.fromCharCode(deslocamento);

    }
    return resultado;

  
  },
  decode: function (offset, textBox) {
  let resultado = "";
  for (let letra = 0; letra< textBox.length; letra++) {
    let num = textBox.charCodeAt(letra);
    let codigo = (num - 90);
    let deslocamento = (((codigo - offset)%26)+ 90); 
    resultado += String.fromCharCode(deslocamento);

  }
  return resultado;
  
  }
}
export default cipher;
