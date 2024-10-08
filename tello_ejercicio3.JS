const prompt = require('prompt-sync')();
        var nro1,nro2;
        var pal1= prompt('ingrese una palabra: ');
        var pal2= prompt('ingrese una palabra: ');
        var igual 
        if (pal1 == pal2) {
                console.log("true")
                igual=true
        } 
        
        else {
        
                console.log("false")
                igual=false
        }  
        caracteres1= pal1.length;
        caracteres2=pal2.length;
        if (caracteres1==caracteres2) {
                console.log("misma cantidad de letras")
                cantidadletras=true

        }
        else {
                console.log("distinta cantidad de letras")
                cantidadletras=false
        }
        
//ejercicio java tello 3
