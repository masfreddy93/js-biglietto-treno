//dichiarazione e assegnazione variabili km ed età 
const kmDaPercorrere = Number(prompt('Inserisci il numero di km che vuoi percorrere, per favore'));
const etaPasseggero = Number(prompt('Inserisci la tua età, per favore'));
console.log(kmDaPercorrere, etaPasseggero);

//calcolo prezzo biglietto per km da percorrere (senza sconti)
const prezzoAlKm = 0.21;
const prezzoBiglietto = prezzoAlKm * kmDaPercorrere;
console.log('Il prezzo del biglietto - senza l\'applicazione di eventuali sconti - è il seguente: ' + prezzoBiglietto.toFixed(2) + ' Є');

//condizioni 
let prezzoFinale;
if (!isNaN(etaPasseggero) && !isNaN(kmDaPercorrere) && (etaPasseggero >= 0) && (kmDaPercorrere >= 1) && Number.isInteger(etaPasseggero)) {
    if ((etaPasseggero >= 18) && (etaPasseggero < 65)) {
        prezzoFinale = prezzoBiglietto;
        } else if (etaPasseggero < 18) {
            prezzoFinale = prezzoBiglietto * 0.8;
        } else {
            prezzoFinale = prezzoBiglietto * 0.6;
        }

    //output finale
    document.getElementById('messaggio').innerHTML = 'Il prezzo del biglietto è il seguente: ' + prezzoFinale.toFixed(2) + ' Є';
} else {
    document.getElementById('messaggio').innerHTML = 'Attenzione: Sono stati inseriti dei valori non corretti. Per favore, aggiornare la pagina e ripetere la procedura';
}

