console.log('veikia')

 
// 1. Funkciją, kuri paverčia žmogaus metus į šuns metus:
// 1.1. Funkcija priima vieną parametrą: žmogaus amžius.
// 1.2. Funkcija grąžina atsakymą tokiu formatu: 5 žmogaus metai yra 35 šuns metai.

function humanToDogYears (humanYears) {
    let dogYears = humanYears * 7
    let output = `${humanYears} žmogaus metai yra ${dogYears} šuns metai.`

    return output
}
 console.log(humanToDogYears(5))
//  alert(humanToDogYears(8))


// 2. Funkciją, kuri skaičiuoja per kiek laiko reikia perskaityti knygą, kad pasiekti užsibrėžtą knygų per metaus skaičių:
// 2.1. Funkcija priima vieną parametrą: norimų per metus perskaityti knygų skaičių.
// 2.1. Funkcija grąžina atsakymą tokiu formatu: norint perskaityti 10 knygų per metus, vienai knygai perskaityti turėsi 36 dienas.

// function readWantedBooks (numberOfBooks) {
//     let daysForBook = Math.round(365 / numberOfBooks)

//     let output = `Norint perskaityti ${numberOfBooks} knygų per metus, vienai knygai perskaityti turėsi ${daysForBook} dienas .`

//     return output
// }

// console.log(readWantedBooks(10))

function readWantedBooks (numberOfBooks) {
    // let week = math.floor(days/7)
    // console.log(numberOfBooks)
    let week = Math.floor((365 / numberOfBooks) / 7) //math.floor apvalina i mazaja puse
    // console.log(Math.floor(week))
    let remainingDays = week % 7
    // console.log(remainingDays)


    let output = `Norint perskaityti ${numberOfBooks} knygų per metus, vienai knygai perskaityti turėsi ${week} savaites ir ${remainingDays} dienas .`

    return output
}

console.log(readWantedBooks(10))
 
// 3. Funkciją, kuri konvertuoja dienas į savaites:
// 3.1. Funkcija priima vieną argumentą: dienų skaičių.
// 3.2. Funkcija grąžina atsakymą tokiu formatu: 35 dienos yra 5 savaitės.

function daysToWeeks (numberOfDays) {

    let numberOfWeeks = numberOfDays / 7
    let fixedWeeks = numberOfWeeks.toFixed(1) // to.Fixed() skliausteliuose rasom kiek skaiciu po kablelio rodys ats

    let output = `${numberOfDays} dienos yra ${fixedWeeks} savaitės.`

    return output
}

console.log(daysToWeeks(35))
 
// 4. Funkciją, kuri konvertuoja dienas į metus:
// 4.1. Funkcija priima vieną argumentą: dienų skaičių.
// 4.1. Funkcija grąžina atsakymą tokiu formatu (atsakymą apvalinant): 365 dienos yra 1 metai.


function daysToYears (numberOfDays){
    
    let numberOfYears = numberOfDays / 365

    let output = `${numberOfDays} dienos yra ${numberOfYears} metai.`

    return output
}

console.log (daysToYears(365))
 
// 5. Funkciją, kuri konvertuoja metus į valandas:
// 5.1. Funkcija priima vieną argumentą: metų skaičių.
// 5.2. Funkcija grąžina atsakymą tokiu formatu: 5 metai turi 43800 valandas.

function yearsToHours (numberOfYears) {
    
    let numberOfHours = (numberOfYears *24) * 365

    let output = `${numberOfYears} metai turi ${numberOfHours} valandas.`

    return output
}

console.log (yearsToHours(5))

// 6. Funkciją, kuri konvertuoja mėnesius į valandas:
// 6.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 6.2. Funkcija grąžina atsakymą tokiu formatu: 3 mėnesiai turi 2190 valandas.

function monthsToHours (numberOfMonths) {
    
    let numberOfHours = ((numberOfMonths * 30) * 24)

    let output = `${numberOfMonths} mėnesiai turi ${numberOfHours} valandas.`

    return output
}
 
console.log (monthsToHours(3))

// 7. Funkciją, kuri konvertuoja mėnesius į minutes:
// 7.1. Funkcija priima vieną argumentą: mėnesių skaičių.
// 7.2. Funkcija grąžina atsakymą tokiu formatu: 2 mėnesiai turi 87600 minutes.

function monthsToMinutes (numberOfMonths) {

    let numberOfMinutes = (((numberOfMonths * 30) * 24)) * 60

    let output = `${numberOfMonths} mėnesiai turi ${numberOfMinutes} minutes`

    return output
}

console.log (monthsToMinutes(2))


// Papildomai dabar padarykime kad uzduotyse, kur atsakymas nera sveikas skaicius, jeigu turime liekana, tai ja irgi atvaizduotu sakinyje. Pvz., jeigu irasome 15 dienu, o mums turetu grazinti atsakyma: 15 dienos yra 2 savaites ir 1 diena.

 

// Ir tuo paciu principu pameginkime atlikti visas uzduotis, kuriuose yra liekana 