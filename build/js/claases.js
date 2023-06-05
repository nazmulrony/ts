"use strict";
class Coder {
    constructor(name, music, age, lang = 'typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        //by default set to public, here the public keyword can be ignored
        return `Hello, I am ${this.age}`;
    }
}
const Rony = new Coder('Nazmul Rony', 'Rock', 26);
console.log(Rony.music);
console.log(Rony.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Dev = new WebDev('Asus', 'Rony', 'Pop', 23);
console.log(Dev.getLang());
class Guitarist {
    constructor(name, instrument) {
        (this.name = name), (this.instrument = instrument);
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Niloy = new Guitarist('Niloy', 'guitar');
console.log(Niloy.play('plays'));
//---------------------------------------------------//
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Bijoy = new Peeps('Bijoy');
const Shafi = new Peeps('Shafi');
const Ifty = new Peeps('Ifty');
console.log(Bijoy.id); //1
console.log(Shafi.id); //2
console.log(Ifty.id); //3
console.log('Instance created:', Peeps.count); //3
//setter and getter function
class Bands {
    constructor() {
        this.dataState = [];
    }
    ///getter method
    get data() {
        return this.dataState;
    }
    // setter method
    set data(value) {
        if (Array.isArray(value) &&
            value.every((el) => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Param is not array of strings');
    }
}
const Aurthohin = new Bands();
Aurthohin.data = ['Song1', 'song2', 'song3'];
console.log(Aurthohin.data);
