class coder {
    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected language: string
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.language = language;
    }
    public getAge() {
        return `I am ${this.age}`;
    }
}

class developer extends coder {
    // lang: string;
    // constructor(lang: string) {
    //     super(name, music, age, this.language);
    //     this.lang = lang;
    // }
}
