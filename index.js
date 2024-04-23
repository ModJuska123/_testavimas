console.log("labas Modestai");
function sudetis(a, b, c) {
    return a + b + c;
}
console.log(sudetis(1, 1, 1));

// antra paskaita

let one = 12 + "chair";
one = "table";
one = 256;
console.log(one);

// užduotis

// const two = "bike";
// two = "motorbike";
// two = "trike";
// console.log(two);

//uzduotis

const niceWeather = true
const nightTime = false
const temp = 24
 
let niceDayTimeWeather = (nightTime == false || niceWeather == true) //true
let niceTemperature = (temp < 22 && niceDayTimeWeather == false) //false
let lastCheck = !(niceTemperature == false) //yra true, pasikeicia i false
 
console.log(lastCheck) //true or false