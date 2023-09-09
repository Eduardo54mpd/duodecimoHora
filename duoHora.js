// Segunda "versão" do código

var hora;

switch (new Date().getHours()) { // Também serve como dicionário para as horas
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

var dt = new Date();
var min = dt.getMinutes();
var duodecimo; // Um duodécimo equivale a 5 minutos
if (min < 5) {
    duodecimo = 0;
} else if (min > 4 && min < 10) {
    duodecimo = 1;
} else if (min > 9 && min < 15) {
    duodecimo = 2;
} else if (min > 14 && min < 20) {
    duodecimo = 3;
} else if (min > 19 && min < 25) {
    duodecimo = 4;
} else if (min > 24 && min < 30) {
    duodecimo = 5;
} else if (min > 29 && min < 35) {
    duodecimo = 6;
} else if (min > 34 && min < 40) {
    duodecimo = 7;
} else if (min > 39 && min < 45) {
    duodecimo = 8;
} else if (min > 44 && min < 50) {
    duodecimo = 9;
} else if (min > 49 && min < 55) {
    duodecimo = 10;
} else if (min > 54) {
    duodecimo = 11;
}
console.log("É/São " + duodecimo + " duodécimo(s) da hora " + hora + ".");
