//index signatures
interface TransactionObj {
    [index: string]: number; // this line is the index signature
    Pizza: number;
    Books: number;
    Job: number;
}

const todaysTransaction: TransactionObj = {
    Pizza: -10,
    Books: -10,
    Job: -10,
};

// console.log(todaysTransaction.Pizza);
// console.log(todaysTransaction['Pizza']);

const prop: string = 'Pizza';
//without index signature next line will show error
// console.log(todaysTransaction[prop]);

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        //without index signature next line will show error

        total += transactions[transaction];
    }
    return total;
};

// console.log(todaysNet(todaysTransaction));

interface Student {
    // [index: string]: string | number | string[] | undefined;
    name: string;
    GPA: number;
    classes?: string[];
}

const student: Student = {
    name: 'Rony',
    GPA: 3.59,
    classes: ['DLD', 'DSA', 'DSP'],
};
// console.log(student.test);

//loop through objects without index signatures
for (const key in student) {
    console.log(`${key}: ${student[key as keyof Student]}`);
}

//another way is
Object.keys(student).map((key) =>
    console.log(`${key}: ${student[key as keyof typeof student]}`)
);

//another way may be  with a function

const logObjectKey = (student: Student, key: keyof Student): void => {
    console.log(`Student's ${key}: ${student[key]}`);
};

logObjectKey(student, 'GPA');

//__________________________________________________________//

// interface Incomes {
//     [key: string]: number;
//     Pizza: number;
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';
type Income = Record<Streams, number | string>;
const monthlyIncome: Income = {
    salary: 500,
    bonus: 200,
    sidehustle: 'fifty dollar',
};

for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue as keyof Income]);
}
