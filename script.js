//=VARIABLES.
var passengerName = document.getElementById('passenger-name');
console.log(passengerName);

var travelDistance = document.getElementById('travel-distance');
console.log(travelDistance);

var ageRange = document.getElementById('age-range');
console.log(ageRange);

var discount;
console.log(discount);

var printName = document.getElementById('print-name');
console.log(printName);

var printDiscount = document.getElementById('print-discount');
console.log(printDiscount);

var printCar = document.getElementById('print-car');
console.log(printCar);

var printCode = document.getElementById('print-code');
console.log(printCode);

var printPrice = document.getElementById('print-price');
console.log(printPrice);


//=PRINT TICKET DETAILS.
var generateTicketButton = document.getElementById('generate-ticket').addEventListener("click",
    function () {


        var ticketPrice = parseInt(travelDistance.value) * 0.21;
        console.log(ticketPrice)

        //?METTO UN IF PER DETERMINARE IL PREZZO SE HO UNO SCONTO.
        if (ageRange.value == 'underage') {
            ticketPrice *= 0.8;
            console.log(ticketPrice);

            discount = 'Sconto minorenne.';
        } else if (ageRange.value == 'over-65') {
            ticketPrice *= 0.6;
            console.log(ticketPrice);

            discount = 'Sconto over 65.';
        } else if (ageRange.value == 'adult') {
            ticketPrice *= 1;
            console.log(ticketPrice);
            discount = 'Tariffa ordinaria.';
        }




        //?RIEMPIO I TAG HTML CON I VALORI DEGLI IMPUT INSERITI DALL'UTENTE
        printName.innerHTML = passengerName.value;
        console.log(printName);

        printDiscount.innerHTML = discount;
        console.log(printDiscount);

        printCar.innerHTML = Math.floor(Math.random() * 12) + 1;
        console.log(printCar);

        printCode.innerHTML = '#' + parseInt(Math.floor(Math.random() * (100000 - 90000) + 90000));
        console.log(printCode);

        printPrice.innerHTML = ticketPrice.toFixed(2);
        console.log(printPrice);

        //?MOSTRO I DETTAGLI AL CLICK DEL BOTTONE.
        var showDetails = document.getElementById('ticket-details').classList.remove("hidden");
        console.log(showDetails);

    }
);

var undoButton = document.getElementById('undo');
console.log(undoButton);

undoButton.addEventListener("click",
    function () {
        passengerName.value = '';

        travelDistance.value = '10';

        ageRange.value = 'adult';

    }
);