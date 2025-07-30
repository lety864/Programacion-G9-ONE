//variables
let maximoValor = 25;
let numeroSecreto = Math.floor(Math.random()*maximoValor) + 1;
//se saco la variable debido a que el bucle while esta leyendo la variable antes de declararlo
let numeroUsuario = 0;
let intentos=1; 
//let palabraVeces='vez';
let maximoIntentos = 3;

while(numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${maximoValor} por favor:`));
    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto){
        //interpolacion con comillas invertidas
        alert(`¡Acertaste, el numero es: ${numeroUsuario}, Lo hiciste en ${intentos} ${intentos == 1 ? 'Vez' : 'Veces'}!`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert("El numero es menor");
        }else{
            alert("El numero es mayor");
        }
        //incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = 'veces';
        if(intentos > maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
            break;
        }
    }
}




