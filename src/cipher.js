    //Se crea la constante cipher
    const cipher={
      //Se crea la función integrando el texto y la clave
      encode:(text, shift)=> {
      //Se declara la variable y se agrega la fórmula del alfabeto normal sin
      //ñ,para que pueda dar muchas vueltas a este
      var shiftText = parseInt(shift);
      shiftText= (2080 + shiftText) % 26;
      //Se crea la variable de salida o resultado
      var result = "";
      //declaramos para ir por cada letra o caracter
      for (var i = 0; i < text.length; i++) {
      //declarando esta variable obtenemos el caracter que agregaremos
      var c = text.charCodeAt(i);
      //Condicionamos y agregamos la fórmula para letras mayúsculas 
      //según alfabeto normal y código ASCII
      if (65 <= c && c <=  90){
      result += String.fromCharCode((c - 65 + shiftText) % 26 + 65);
      }  
      //Condicionamos y agregamos la fórmula para letras minúsculas 
      //según alfabeto normal y código ASCII
      else if (97 <= c && c <= 122){
      result += String.fromCharCode((c - 97 + shiftText) % 26 + 97);
      }
      //Adjuntamos para que el resultado salga con el caracter en 
      //la posición indicada (i)
      else{result += text.charAt(i);
      }
      }
      //Obtenemos el resultado 
      return result;
      },
      //Se crea la función para comenzar con las instrucciones
      decode:(text, shift)=> {
      //Se declara la variable se parcela (analiza) y se agrega la fórmula del alfabeto normal sin ñ,
      //para que pueda dar muchas vueltas a este
      var shiftTexto = parseInt(shift);
      shiftTexto= (2080 + shiftTexto) % 26;
      //Se crea la variable de salida o resultado
      var result = "";
      //declaramos para ir por cada letra o caracter
      for (var i = 0; i < text.length; i++) {
      //declarando esta variable obtenemos el caracter que agregaremos
      var c = text.charCodeAt(i);
      //Condicionamos y agregamos la fórmula para letras mayúsculas 
      //según alfabeto normal y código ASCII
      if (65 <= c && c <=  90){
      result += String.fromCharCode((c - 65 - shiftTexto) % 26 + 65);
      }
      //Condicionamos y agregamos la fórmula para letras minúsculas 
      //según alfabeto normal y código ASCII
      else if (97 <= c && c <= 122){
      result += String.fromCharCode((c - 97 - shiftTexto) % 26 + 97);
      }
      //Adjuntamos para que el resultado salga con el caracter en 
      //la posición indicada (i)
      else{result += text.charAt(i);
      }
      }
      //Obtenemos el resultado 
      return result;
      }};
      //exporta const cipher al index.js
      export default cipher;
      
  