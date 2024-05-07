// objects

const human = new Object()

human.name = "Katins";
human.surname = "Margs";
human.greet = function( ) {
    console.log("Sveiki, mano vardas " + this.name + " " + "o pavardė " + this.surname)
}
console.log(human.name)
human.greet()

//bandymas atkartoti is atminties

const cat = new Object;

cat.name = "Katinas";
cat.surname = "Leupoldas";
cat.greet = function() {
    console.log("Sveiki, mano vardas ir pavardė yra " + this.name + " " + this.surname)
    }
    console.log(cat.name);
    cat.greet();