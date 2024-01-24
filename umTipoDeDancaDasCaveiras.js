var dt = new Date();
var horas = dt.getHours();
var hr;

if (horas < 7) {
    hr = horas + 6;
} else if (horas > 6 && horas < 19) {
    hr = horas - 6;
} else {
    hr = horas - 18;
}

var horaPalavra = ['',
    'primeira', 'segunda', 'terceira',
    'quarta', 'quinta', 'sexta',
    'sétima', 'oitava', 'nona',
    'décima', 'undécima', 'duodécima'
];

var hora = horaPalavra[hr];
        
let todasAsCaveirasHora = {
    'primeira': 'fazem a feira', 'segunda': 'ficam imundas', 'terceira': 'viram marisqueiras',
    'quarta': 'visitam a Marta', 'quinta': 'se sujam de tinta', 'sexta': 'fazem cesta',
    'sétima': 'ficam sérias', 'oitava': 'se banham de lava', 'nona': 'viram folionas',
    'décima': 'ficam péssimas', 'undécima': 'ficam chiquérrimas', 'duodécima': 'vão à Déspina'
};

let todasAsCaveiras = todasAsCaveirasHora[hora];

console.log(`Quando o relógio bate à ${hora}, todas as caveiras ${todasAsCaveiras}.\nTUMBALACATUMBA TUMBA TÁ!`);
