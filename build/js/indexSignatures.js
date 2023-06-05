"use strict";
const todaysTransaction = {
    Pizza: -10,
    Books: -10,
    Job: -10,
};
// console.log(todaysTransaction.Pizza);
// console.log(todaysTransaction['Pizza']);
const prop = 'Pizza';
//without index signature next line will show error
// console.log(todaysTransaction[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        //without index signature next line will show error
        total += transactions[transaction];
    }
    return total;
};
const student = {
    name: 'Rony',
    GPA: 3.59,
    classes: ['DLD', 'DSA', 'DSP'],
};
// console.log(student.test);
//loop through objects without index signatures
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//another way is
Object.keys(student).map((key) => console.log(`${key}: ${student[key]}`));
//another way may be  with a function
const logObjectKey = (student, key) => {
    console.log(`Student's ${key}: ${student[key]}`);
};
logObjectKey(student, 'GPA');
const monthlyIncome = {
    salary: 500,
    bonus: 200,
    sidehustle: 'fifty dollar',
};
for (const revenue in monthlyIncome) {
    console.log(monthlyIncome[revenue]);
}
