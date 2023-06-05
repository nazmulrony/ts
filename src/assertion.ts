type One = string;
type Two = string | number;
type Three = 'hello';

let a: One = 'hello';
let b = a as Two;
let c = a as Three;

// console.log(a);
// console.log(b);

const addOrConcat = (
    a: number,
    b: number,
    c: 'add' | 'concat'
): string | number => {
    if (c === 'add') return a + b;
    else return '' + a + b;
};

const myVal: string = addOrConcat(2, 2, 'concat') as string;
// console.log(myVal);

const num: number = 110;
const test: string = num as unknown as string;
// console.log(typeof test);

//working with HTML elements
const img = document.querySelector('img')!;
const myImg = document.getElementById('#img') as HTMLImageElement;
// img.src;
// myImg.src;

const year = document.getElementById('year') as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
