"use strict";
class coder {
    constructor(name, music, age, language) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    getAge() {
        return `I am ${this.age}`;
    }
}
const Rony = new coder("Nazmul Rony", "Rock", 26, "ts");
console.log(Rony.getAge());
