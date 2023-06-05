const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj('jahan'));
console.log(isObj(26));
console.log(isObj({ isokay: true }));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};

console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue('true'));
console.log(isTrue({}));
console.log(isTrue([]));
console.log(isTrue([2, 5]));
console.log(isTrue({ 1: 10, 2: 20 }));

//with interface as return value
interface BoolCheck<T> {
    value: T;
    is: boolean;
}

const isBoolValue = <T>(arg: T): BoolCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};

interface hasID {
    id: number;
}
const processUser = <T extends hasID>(user: T): T => {
    //process user
    return user;
};

console.log(processUser({ id: 5, name: 'Rony' }));
// console.log(processUser({ name: 'Rony' })); //this line gonna show error

const getUserProperty = <T extends hasID, K extends keyof T>(
    users: T[],
    key: K
): T[K][] => {
    return users.map((user) => user[key]);
};

const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496',
            },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
        },
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
                lat: '-43.9509',
                lng: '-34.4618',
            },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
        },
    },
];

console.log(getUserProperty(users, 'email'));

//generics with class
class StateObject<T> {
    private data: T;
    constructor(data: T) {
        this.data = data;
    }
    get state(): T {
        return this.data;
    }
    set state(value: T) {
        this.data = value;
    }
}

const store = new StateObject('Rony');
console.log(store.state);
store.state = 'Ifty';
// store.state=12 //This line not gonna work
const myState = new StateObject<(string | number | boolean)[]>([5]);
myState.state = ['Rony', 42, true];
