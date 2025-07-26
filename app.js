//variables
let numeroSecreto = 5;
//se saco la variable debido a que el bucle while esta leyendo la variable antes de declararlo
let numeroUsuario = 0;
let intentos=1; 
let palabraVeces='vez';

while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");
    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto){
        //interpolacion con comillas invertidas
        alert(`¡Acertaste, el numero es: ${numeroUsuario}, Lo hiciste en ${intentos} ${palabraVeces}!`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero es menor");
        }else{
            alert("El numero es mayor");
        }
        //incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
    }
}






