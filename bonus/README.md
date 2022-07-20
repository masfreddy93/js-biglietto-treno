# Biglietto del treno Bonus

###### Calcolate il prezzo del biglietto solo se i dati inseriti dall’utente sono corretti (numero di chilometri ed età devono essere numeri validi)


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
    -SE etaPasseggero == numero AND kmDaPercorrere == numero, ALLORA:

        - SE etaPasseggero >18 AND <65 
            - ALLORA prezzoFinale = prezzoBiglietto
        - ALTRIMENTI SE etaPasseggero < o = a 18 
            - ALLORA prezzoFinale = prezzoBiglietto * 0.8
        - ALTRIMENTI 
            - prezzoFinale = prezzoBiglietto * 0.6
        
        - Genero risposta output all'interno di questo ciclo con messaggio legato all'html

    ALTRIMENTI:
        - Messaggio di output "Inserisci dei numeri validi"
    
