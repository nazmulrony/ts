//partial
interface Assignment {
    studentId: string;
    title: string;
    grade: number;
    verified?: boolean;
}

const updateAssignment = (
    assign: Assignment,
    propsToUpdate: Partial<Assignment>
): Assignment => {
    return { ...assign, ...propsToUpdate };
};
const assign1: Assignment = {
    studentId: 'cste110',
    title: 'Final Project',
    grade: 0,
};
const updatedAssign: Assignment = updateAssignment(assign1, { grade: 3.59 });
console.log(updatedAssign);

//Required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //logical operations
    return assign;
};

const assignVerified: Readonly<Assignment> = {
    ...updatedAssign,
    verified: true,
};

// assignVerified.grade = 50; //this is not possible when readonly

//Pick and Omit
