const kmDaPercorrere = parseInt(prompt('Inserisci il numero di km che vuoi percorrere, per favore'));
const etaPasseggero = parseInt(prompt('Inserisci la tua età, per favore'));
console.log(kmDaPercorrere, etaPasseggero);

const prezzoAlKm = 0.21;
const prezzoBiglietto = prezzoAlKm * kmDaPercorrere;
console.log('Il prezzo del biglietto - al netto di sconti - è il seguente: ' + prezzoBiglietto + ' Є');

let prezzoFinale;

if ((etaPasseggero >= 18) && (etaPasseggero < 65)) {
    prezzoFinale = prezzoBiglietto * 1;
} else if (etaPasseggero < 18) {
    prezzoFinale = prezzoBiglietto * 0.8;
} else {
    prezzoFinale = prezzoBiglietto * 0.6;
}

document.getElementById('messaggio').innerHTML = 'Il prezzo del biglietto è il seguente: ' + prezzoFinale.toFixed(2) + ' Є';