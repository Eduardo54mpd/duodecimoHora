var agora = new Date(); // Programa imprime a hora bíblica baseado na hora atual (duodécimos são acréscimos, idealizados em 2023)

var horas = agora.getHours();
var minutos = agora.getMinutes();

var duodecimo = parseInt(minutos / 5); // Um duodécimo equivale a 5 minutos, logo, uma hora tem 12 duodécimos completos

var horasObjeto = {
    0: 'sexta noturna', 1: 'sétima noturna', 2: 'oitava noturna',
    3: 'nona noturna', 4: 'décima noturna', 5: 'undécima noturna',
    6: 'duodécima noturna', 7: 'primeira', 8: 'segunda', 9: 'terceira',
    10: 'quarta', 11: 'quinta', 12: 'sexta', 13: 'sétima', 14: 'oitava', // Esta variável pode ser usada como "dicionário" pra entender as horas
    15: 'nona', 16: 'décima', 17: 'undécima', 18: 'duodécima',
    19: 'primeira noturna', 20: 'segunda noturna', 21: 'terceira noturna',
    22: 'quarta noturna', 23: 'quinta noturna'
};

var hora = horasObjeto[horas];

if (duodecimo < 2) {
    if (duodecimo == 0){
        console.log(`É a hora ${hora}.`);
    } else {
        console.log(`É 1 duodécimo da hora ${hora}.`);
    }
} else {
    console.log(`São ${duodecimo} duodécimos da hora ${hora}.`);
}