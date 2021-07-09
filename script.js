//=VARIABLES.
var passengerName = document.getElementById('passenger-name');

var travelDistance = document.getElementById('travel-distance');

var ageRange = document.getElementById('age-range');

var discount;

var printName = document.getElementById('print-name');

var printDiscount = document.getElementById('print-discount');

var printCar = document.getElementById('print-car');

var printCode = document.getElementById('print-code');

var printPrice = document.getElementById('print-price');

//=PRINT TICKET DETAILS.
var generateTicketButton = document.getElementById('generate-ticket').addEventListener("click",
    function () {


        var ticketPrice = travelDistance * 0.21;

        //?METTO UN IF PER DETERMINARE IL PREZZO SE HO UNO SCONTO.
        if (ageRange.value == 'underage') {
            ticketPrice *= 0.8;
            discount = 'Sconto minorenne.';
        } else if (ageRange.value == 'over-65') {
            ticketPrice *= 0.6;
            discount = 'Sconto over 65.';
        } else if (ageRange.value == 'adult') {
            ticketPrice *= 1;
            discount = 'Tariffa ordinaria.';
        }

        //?RIEMPIO I TAG HTML CON I VALORI DEGLI IMPUT INSERITI DALL'UTENTE
        printName.innerHTML = passengerName.value;

        printDiscount.innerHTML = discount;

        printCar.innerHTML = Math.floor(Math.random() * 12) + 1;

        printCode.innerHTML = '#FG1003890TI';

        printPrice.innerHTML = ticketPrice.toFixed(2);

        //?MOSTRO I DETTAGLI AL CLICK DEL BOTTONE.
        var showDetails = document.getElementById('ticket-details').classList.remove("hidden");

    }
);

var undoButton = document.getElementById('undo');

undoButton.addEventListener("click",
    function () {
        passengerName.value = '';

        travelDistance.value = '10';

        ageRange.value = 'adult';
    }
);