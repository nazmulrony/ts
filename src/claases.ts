class Coder {
    secondLang!: string;

    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = 'typescript'
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }

    public getAge() {
        //by default set to public, here the public keyword can be ignored
        return `Hello, I am ${this.age}`;
    }
}

const Rony = new Coder('Nazmul Rony', 'Rock', 26);

console.log(Rony.music);
console.log(Rony.getAge());

class WebDev extends Coder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age);
        this.computer = computer;
    }
    public getLang() {
        return `I write ${this.lang}`;
    }
}
const Dev = new WebDev('Asus', 'Rony', 'Pop', 23);
console.log(Dev.getLang());

interface Musician {
    name: string;
    instrument: string;
    play(action: string): string;
}

class Guitarist implements Musician {
    name: string;
    instrument: string;
    constructor(name: string, instrument: string) {
        (this.name = name), (this.instrument = instrument);
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}

const Niloy = new Guitarist('Niloy', 'guitar');
console.log(Niloy.play('plays'));

//---------------------------------------------------//
class Peeps {
    static count: number = 0;
    static getCount(): number {
        return Peeps.count;
    }
    public id: number;
    constructor(public name: string) {
        this.name = name;
        this.id = ++Peeps.count;
    }
}

const Bijoy = new Peeps('Bijoy');
const Shafi = new Peeps('Shafi');
const Ifty = new Peeps('Ifty');

console.log(Bijoy.id); //1
console.log(Shafi.id); //2
console.log(Ifty.id); //3
console.log('Instance created:', Peeps.count); //3

//setter and getter function

class Bands {
    private dataState: string[];
    constructor() {
        this.dataState = [];
    }
    ///getter method
    public get data(): string[] {
        return this.dataState;
    }
    // setter method
    public set data(value: string[]) {
        if (
            Array.isArray(value) &&
            value.every((el) => typeof el === 'string')
        ) {
            this.dataState = value;
        } else throw new Error('Param is not array of strings');
    }
}

const Aurthohin = new Bands();
Aurthohin.data = ['Song1', 'song2', 'song3'];
console.log(Aurthohin.data);
