/* Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo
 de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha
Por ejemplo:
Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG*/
$(document).ready(function() {
  // inicializando variables
  let inputText = $('#input-text');
  let btnCipher = $('#btn-cipher');
  let btnDecipher = $('#btn-decipher');
  let messages = $('.messages');
  btnCipher.on('click', () => {
    // debugger;
    // Ingresar la frase a encriptar
    let valueInputText = inputText.val().toLocaleUpperCase();
    // se evalua que el texto ingresado no sea vacio y que solamente sean letras del alfabeto en mayusculas o minusculas
    if (valueInputText || /[a-zA-Z\s]/g.test(valueInputText)) {
      // inicializamos el acumulador en vacio pues ahi se ira acumulando la palabra cifrada
      var codeTextCipher = '';
      for (let i = 0; i < valueInputText.length; i++) {// el ciclo for recorrera el arreglo de letras
        const valorASCII = valueInputText.charCodeAt(i);// convertimos la letra en la posicion i a su valor ASCII
        if (valorASCII >= 65 && valorASCII <= 90) {
          /* Usamos la formula que se nos facilito del cifrado cesar
          para obtener la letra  encriptada pero en codigo ASCII */
          let codigoASCIILetra = (valorASCII - 65 + 33) % 26 + 65; // convertimos la letra en ASCII a su valor en el alfabeto
          let letraAlfabetoEncriptada = String.fromCharCode(codigoASCIILetra);
          codeTextCipher += letraAlfabetoEncriptada;
        } else if (valorASCII === 32) { // si dentro del mensaje se encuentra un espacio entonces no se encriptare este valor pues mantendra su origen de ser un espacio
          let space = ' ';
          codeTextCipher += space;
        }
      }
    } else {
      // si el mensaje ingresado es vacio entonces aparecera una alerta pidiendo un mensaje diferente de vacio
      alert('Ingresa un mensaje');
    }
    // cambiamos el contenido por el mensaje cifrado
    messages.text(codeTextCipher);
  });
  btnDecipher.on('click', () => {
    // debugger;
    // Ingresar la frase a desencriptar
    let valueInputText = inputText.val().toLocaleUpperCase();
    // se evalua que el texto ingresado no sea vacio y que solamente sean letras del alfabeto en mayusculas o minusculas
    if (valueInputText || /[a-zA-Z\s]/g.test(valueInputText)) {
      var codeTextCipher = '';
      for (let i = 0; i < valueInputText.length; i++) {// el ciclo for recorrera el arreglo de letras
        const valorASCII = valueInputText.charCodeAt(i);// convertimos la letra en la posicion i a su valor ASCII
        if (valorASCII >= 65 && valorASCII <= 90) {
          /* Usamos la formula que se nos facilito del cifrado cesar
          para obtener la letra  encriptada pero en codigo ASCII */
          let codigoASCIILetra = (valorASCII + 65 - 33) % 26 + 65; // convertimos la letra en ASCII a su valor en el alfabeto
          let letraAlfabetoEncriptada = String.fromCharCode(codigoASCIILetra);
          codeTextCipher += letraAlfabetoEncriptada;
        } else if (valorASCII === 32) { // si dentro del mensaje se encuentra un espacio entonces no se encriptare este valor pues mantendra su origen de ser un espacio
          let space = ' ';
          codeTextCipher += space;
        }
      }
    } else {
      alert('Ingresa un mensaje');
    }
    messages.text(codeTextCipher);
  });
});
