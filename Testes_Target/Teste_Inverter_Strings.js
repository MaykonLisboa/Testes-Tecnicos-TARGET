const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite uma string para inverter: ", function(input){
    const invertedString = inverterString(input);
    console.log("Stirng invertida: "+ invertedString);
    rl.close();

});

function inverterString(str){
    let resultado = "";
    for(let i = str.length -1; i >= 0; i--){
        resultado+= str[i];
    }
    return resultado;
}
