/* Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65) */

//=VARIABLES.
var passengerName = document.getElementById('passenger-name');

var travelDistance = document.getElementById('travel-distance');

var ageRange = document.getElementById('age-range');

var discount = 'Tariffa ordinaria.';

var printName = document.getElementById('print-name');

var printDiscount = document.getElementById('print-discount');

var printCar = document.getElementById('print-car');

var printCode = document.getElementById('print-code');

var printPrice = document.getElementById('print-price');

//=PRINT TICKET DETAILS.
var generateTicketButton = document.getElementById('generate-ticket').addEventListener("click",
    function () {
        passengerName = passengerName.value;

        travelDistance = travelDistance.value;

        ageRange = ageRange.value;

        var ticketPrice = travelDistance * 0.21;

        //?METTO UN IF PER DETERMINARE IL PREZZO SE HO UNO SCONTO.
        if (ageRange = 'underage') {
            ticketPrice *= 0.8;
            discount = 'Sconto minorenne.';
        }

        if (ageRange = 'over-65') {
            ticketPrice *= 0.6;
            discount = 'Sconto over 65.';
        }

        //?RIEMPIO I TAG HTML CON I VALORI DEGLI IMPUT INSERITI DALL'UTENTE
        printName.innerHTML = passengerName;

        printDiscount.innerHTML = discount;

        printCar.innerHTML = Math.floor(Math.random() * 12) + 1;

        printCode.innerHTML = '#FG1003890TI';

        printPrice.innerHTML = ticketPrice.toFixed(2);

    }
);