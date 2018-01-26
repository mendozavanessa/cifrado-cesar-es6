Cifrado Cesar
==============
Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado 
según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Por ejemplo:

-Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
-Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

Pseudocodigo
============
modulo encriptar(mensaje,arr,valorFijo)
 inicio
  para i=0 hasta (longitud del arreglo) hacer
    valorASCCII = mensaje.charCodeAt(i)
    codigoASCIILetra=(valorASCII-65+valorFijo)%26+65;
    letraAlfabetoEncriptada = String.fromCharCode(codigoASCIILetra);
    arr.splice(i,1,letraAlfabetoEncriptada);
  fin
 return arr.join("");
 fin
 hacer
 inicio
  leer mensaje
  llamar modulo encriptar
 mientras(op=="SI" o op=="si")
 fin
 
 
    
