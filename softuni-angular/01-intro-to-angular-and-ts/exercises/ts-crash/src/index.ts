let id: number = 5;
let company: string = 'My company';
let isPublished: boolean = true;
let x: any = 'Hello';
x = 35;
let age: number;
age = 25;

let ids: number[] = [1, 2, 3, 4, 5]; // type of the values inside and then the [] to def the array
let arr: any[] = [1, true, 'test'];

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]; // the order should be followed
// Tuple array
let employee: [number, string][];
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill'],
];

// Union
let pid: string | number;
pid = 22;
pid = '2';

// Enum
enum Direction1 {
    Up = 3, // starts from 3 up, default starts from 0
    Down,
    Left,
    Right
};
console.log(Direction1.Up);

enum Direction2 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right',
};

// Objects
const user: {
    id: number,
    name: string,
} = {
    id: 1,
    name: 'John',
};

// way 2 - custom type
type User = {
    id: number,
    name: string,
}
const user2: User = {
    id: 1,
    name: 'John',
};

// Type Assertion
let cid: any = 1;
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
function addNum(x: number, y: number): number {
    return x + y;
}
console.log(addNum(3, 5));

function log(message: string | number): void {
    console.log(message);
}
console.log(log('test text'));


// Interface
interface UserInterface {
    readonly id: number,
    name: string,
    age?: number, // optional property
};
const user1: UserInterface = {
    id: 1,
    name: 'John'
};

type Point = number | string; // interfaces don't take unions
const p1: Point = 1;

interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes
class Person {
    protected id: number // only accessible from within the class or any extented classes
    name: string
    private credential: string // only accessible from within the class

    constructor(id: number, name: string, credential: string) {
        this.id = id
        this.name = name
        this.credential = credential
    }

    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad', 'ighdwa');
const mike = new Person(2, 'Mike', 'iuyorje');

console.log(brad.register());


const PaymentStatus2 = {
    Failed: 'Failed',
    Successful: 'Successful',
    Pending: 'Pending'
};

PaymentStatus2.Failed;

interface userInterface2 {
    name: string,
}

const usersTest2 = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
] as userInterface2[];