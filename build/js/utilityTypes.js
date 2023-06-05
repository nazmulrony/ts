"use strict";
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'cste110',
    title: 'Final Project',
    grade: 0,
};
const updatedAssign = updateAssignment(assign1, { grade: 3.59 });
console.log(updatedAssign);
//Required and readonly
const recordAssignment = (assign) => {
    //logical operations
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, updatedAssign), { verified: true });
// assignVerified.grade = 50; //this is not possible when readonly
//Pick and Omit
