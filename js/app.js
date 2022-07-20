const kmDaPercorrere = parseInt(prompt('Inserisci il numero di km che vuoi percorrere, per favore'));
const etaPasseggero = parseInt(prompt('Inserisci la tua età, per favore'));
console.log(kmDaPercorrere, etaPasseggero);

const prezzoAlKm = 0.21;
const prezzoBiglietto = prezzoAlKm * kmDaPercorrere;
console.log('Il prezzo del biglietto - al netto di sconti - è il seguente: ' + prezzoBiglietto + ' Є');

