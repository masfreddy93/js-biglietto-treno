const kmDaPercorrere = parseInt(prompt('Inserisci il numero di km che vuoi percorrere, per favore'));
const etaPasseggero = parseInt(prompt('Inserisci la tua età, per favore'));
console.log(kmDaPercorrere, etaPasseggero);

const prezzoAlKm = 0.21;
const prezzoBiglietto = prezzoAlKm * kmDaPercorrere;
console.log('Il prezzo del biglietto - al netto di sconti - è il seguente: ' + prezzoBiglietto + ' Є');

if ((etaPasseggero >= 18) && (etaPasseggero < 65)) {
    console.log('Il prezzo del biglietto è il seguente: ' + prezzoBiglietto.toFixed(2) + ' Є');
} else if (etaPasseggero < 18) {
    const prezzoFinale = prezzoBiglietto * 0.8;
    console.log('Il prezzo del biglietto è il seguente: ' + prezzoFinale.toFixed(2) + ' Є');
} else {
    const prezzoFinale = prezzoBiglietto * 0.6;
    console.log('Il prezzo del biglietto è il seguente: ' + prezzoFinale.toFixed(2) + ' Є');
}