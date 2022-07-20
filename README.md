# Biglietto del treno

###### Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
###### Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
###### - il prezzo del biglietto è definito in base ai km (0.21 € al km)
###### - va applicato uno sconto del 20% per i minorenni
###### - va applicato uno sconto del 40% per gli over 65.
###### L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo : es 15.23 €).


- Dichiara la variabile kmDaPercorrere 
- Inizializza la variabile kmDaPercorrere con un prompt che richieda all'utente quanti km vuole percorrere
- Utilizza un parseInt per convertire (il tutto in una riga di codice) la stringa generata da prompt in un numero

- Dichiara la variabile etaPasseggero 
- Inizializza la variabile etaPasseggero con un prompt che richieda all'utente quanti km vuole percorrere
- Utilizza un parseInt per convertire (il tutto in una riga di codice) la stringa generata da prompt in un numero

- dichiara la variabile prezzoAlKm
- assegna alla variabile prezzoAlKm il valore 0.21

- dichiara la variabile prezzoBiglietto 
- inizializza la variabile prezzoBiglietto con il calcolo: prezzoAlKm * kmDaPercorrere;
- Esci in console il prezzo al netto di eventuali sconti

- Dichiaro condizioni per valutare prezzo finale: 
    - SE etaPasseggero >18 AND <65 
        - ALLORA prezzoFinale = prezzoBiglietto
    - ALTRIMENTI SE etaPasseggero < o = a 18 
        - ALLORA prezzoFinale = prezzoBiglietto * 0.8
    - ALTRIMENTI 
        - prezzoFinale = prezzoBiglietto * 0.6
    - Genero risposta output all'interno di questo ciclo con messaggio legato all'html
    
