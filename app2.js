
//Mi primer código
//alert('Hola mundo');
/*
Prueba de comentario
*/
let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 4;
//let palabraIntento = 'intento';
console.log(numeroSecreto);
console.log(numeroUsuario);
console.log(intentos);
while (numeroUsuario != numeroSecreto){
    numeroUsuario = prompt('Dame un número:');   
    if (numeroUsuario == numeroSecreto){
        alert(`El número es correcto, era: ${numeroSecreto}, lo resolviste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    }else{
        if (numeroUsuario > numeroSecreto){
            alert('El número secreto es menor')
        }else{
            alert('El número secreto es mayor')
        }
        intentos = intentos + 1;
        //palabraIntento = 'Intentos';
        if (intentos > maximosIntentos){
            alert(`Máximo de intentos, perdiste, el número era: ${numeroSecreto}`);
            break;
        }
        //alert('No acertaste, el número es '+numeroSecreto);
    }
}