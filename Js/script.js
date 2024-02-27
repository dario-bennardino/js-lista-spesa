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

while(numeroArticoli < listaSpesa.length){
    console.log(listaSpesa[numeroArticoli]);
    numeroArticoli++;
}