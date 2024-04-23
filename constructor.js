//here we have object that utilises this keyword in object method

const persona1 = {
    name: 'Paulius',
    greet: function(){
        console.log('Sveiki, mano vardas ' + this.name)
    }
} 
persona1.greet();

//bandau atkartoti

const persona2 = {
    name: "Onutė",
    print: function() 
    {console.log('Sveiki, mano vardas ' + this.name)
    }
}
persona2.print();

//bandau kartoti 3
const persona3 = {
    name: "Jonukas",
    print2: function() {
        console.log("Sveiki, mano vardas yra " + this.name)
    }
} 
persona3.print2();


//constructor function
// zodeliu this nurodo objektą, kai iškvieciama funkcija

function persona (name) {
    this.name = name;
    this.intro = function () {
        console.log('Sveiki, mano vardas ' + this.name)
    }
}
const petras = new persona('Petras');

petras.intro();

// bandymas parasyti construktoriu is atminties

function persona4(name) {
    this.name = name;
    this.intro = function() {
        console.log("Sveiki, mano vardas yra " + this.name)
    }
}
const antanas = new persona4("Antanas");
antanas.intro();