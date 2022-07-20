//dichiarazione e assegnazione variabili km ed età 
const kmDaPercorrere = parseInt(prompt('Inserisci il numero di km che vuoi percorrere, per favore'));
const etaPasseggero = parseInt(prompt('Inserisci la tua età, per favore'));
console.log(kmDaPercorrere, etaPasseggero);

//calcolo prezzo biglietto per km da percorrere (senza sconti)
const prezzoAlKm = 0.21;
const prezzoBiglietto = prezzoAlKm * kmDaPercorrere;
console.log('Il prezzo del biglietto - senza l\'applicazione di eventuali sconti - è il seguente: ' + prezzoBiglietto.toFixed(2) + ' Є');

//condizioni 
let prezzoFinale;
if ((etaPasseggero >= 18) && (etaPasseggero < 65)) {
    prezzoFinale = prezzoBiglietto;
} else if (etaPasseggero < 18) {
    prezzoFinale = prezzoBiglietto * 0.8;
} else {
    prezzoFinale = prezzoBiglietto * 0.6;
}

//output finale
document.getElementById('messaggio').innerHTML = 'Il prezzo del biglietto è il seguente: ' + prezzoFinale.toFixed(2) + ' Є';
