const cipher = {
  encode: function (offset, textBox) {
    if (offset =="" || textBox==""||typeof offset!=="number" ||typeof textBox!=="string"){    
      throw new TypeError('Digite uma senha válida ou confirme se sua mensagem está correta.')
    }
    let resultado = "";
    for (let i = 0; i< textBox.length; i++) {
      let n = textBox.charCodeAt(i);
      let codigo = (n - 65);
      let deslocamento = (((codigo + offset)%26)+ 65); 
      resultado += String.fromCharCode(deslocamento);

    }
    return resultado;

  
  },
  decode: function (offset, textBox) {
  let resultado = "";
  for (let i = 0; i< textBox.length; i++) {
    let n = textBox.charCodeAt(i);
    let codigo = (n - 90);
    let deslocamento = (((codigo - offset)%26)+ 90); 
    resultado += String.fromCharCode(deslocamento);

  }
  return resultado;
  
  }
}
export default cipher;
