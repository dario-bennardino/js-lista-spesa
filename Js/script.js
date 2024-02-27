//creo la variabile listaSpesa utilizzando un array

const listaSpesa = [
    'pane', 
    'latte', 
    'caffe', 
    'pasta', 
    'acqua', 
    'uova', 
    'farina',
    'patate',
    'mele',
    'biscotti',
]

//aggiungo un contatore con una variabile let

let numeroArticoli = 0

//inizio il ciclo while
//se il numero del contatore è < della lunghezza dell'arrey allora:
//1. stampa in console la lista della spesa attribuendo come "i" numeroArticoli
//2. incrementa di 1
//3. il ciclo while finirà quando numeroArticoli sarà = alla lunghezza dell'array listaSpesa

//STAMPA IN CONSOLE

// while(numeroArticoli < listaSpesa.length){
//     console.log(listaSpesa[numeroArticoli]);
//     numeroArticoli++;
// }

//STAMPA IN HTML - ALL'INTERNO DI UNA UL 

// Ottenere l'elemento ul
const elencoSpesaUl = document.getElementById('elenco-spesa');

while (numeroArticoli < listaSpesa.length) {
    // Creare un nuovo elemento li
    const nuovoElementoLi = document.createElement('li');

    // Impostare il testo dell'elemento li con l'elemento corrente della lista
    nuovoElementoLi.textContent = listaSpesa[numeroArticoli];

    // Aggiungere l'elemento li all'elemento ul
    elencoSpesaUl.appendChild(nuovoElementoLi);

    numeroArticoli++;
}



