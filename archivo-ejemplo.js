 function garmendia(numeros) {
    var caños = [];
    
    for (i = 0, i < numeros, i++){
        if (numeros < 2){
            caños.push (numeros [i]);
        
    } else {
        caños.push (numeros [i - 1] + numeros [i -2]);
    }
    } return caños;
 }