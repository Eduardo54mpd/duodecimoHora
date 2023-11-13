// Segunda "versão" do código

var dt = new Date();
var horas = dt.getHours();
var hora;

switch (horas) { // Também serve como dicionário para as horas
    case 0: // Exemplo: se é meia-noite...
        hora = 'sexta noturna'; // É a hora sexta noturna
        break;
    case 1: // Se é 1h da manhã...
        hora = 'sétima noturna'; // É a hora sétima noturna
        break;
    case 2: // Se são 2h da manhã...
        hora = 'oitava noturna'; // É a hora oitava noturna
        break;
    case 3: // E assim sucessivamente até a duodécima (noturna ou diurna)
        hora = 'nona noturna';
        break;
    case 4:
        hora = 'décima noturna';
        break;
    case 5:
        hora = 'undécima noturna';
        break;
    case 6:
        hora = 'duodécima noturna';
        break;
    case 7:
        hora = 'primeira'; // Também pode ser "primeira diurna", embora o termo "diurno" não seja explícito
        break;
    case 8:
        hora = 'segunda';
        break;
    case 9:
        hora = 'terceira';
        break;
    case 10:
        hora = 'quarta';
        break;
    case 11:
        hora = 'quinta';
        break;
    case 12:
        hora = 'sexta';
        break;
    case 13:
        hora = 'sétima';
        break;
    case 14:
        hora = 'oitava';
        break;
    case 15:
        hora = 'nona';
        break;
    case 16:
        hora = 'décima';
        break;
    case 17:
        hora = 'undécima';
        break;
    case 18:
        hora = 'duodécima';
        break;
    case 19:
        hora = 'primeira noturna';
        break;
    case 20:
        hora = 'segunda noturna';
        break;
    case 21:
        hora = 'terceira noturna';
        break;
    case 22:
        hora = 'quarta noturna';
        break;
    case 23:
        hora = 'quinta noturna';
        break;
}

var min = dt.getMinutes();
var duodecimo = parseInt(min / 5); // Um duodécimo equivale a 5 minutos

if (duodecimo < 2) {
    if (duodecimo == 0) {
        console.log(`É a hora ${hora}.`);
    } else {
        console.log(`É 1 duodécimo da hora ${hora}.`);
    }
} else {
    console.log(`São ${duodecimo} duodécimos da hora ${hora}.`);
}
