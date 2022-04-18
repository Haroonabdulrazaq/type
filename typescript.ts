var sum = (a: number, b: number)=> {
    return a + b
}

    var answer = sum(4,5)
    console.log(answer);
    
let isCool: boolean = true


// number
let age: number = 56;

//string

let eyeColor: string = 'brown';
let favoriteQuote: string = `I'm not old, I'm only ${age} years old`;

//Array 

let pets: string[] = ['cats', 'dogs', 'pigs']
let pet2: any[] = [2, 'dogs', 'pigs']

//Object

let wizard: object = {
    name: 'John',
}

// null and undefined

let meh: undefined = undefined

let noo: null = null

//Uncommon Types in TypeScript

//1. Tuple

let basket:[string, number];

basket =['basketball', 5]

//2. Enum

enum Size { small=1, Medium=2, Large=3 }  //Enum are used for iteratables mostly for defining a contant values
let sizeName: number = Size.small;        // Its declaraion is similar to an object but differs a little bit

// 3. void => It should have a reachable end point, It should end or return something

let sing =(): void =>{
    console.log('lalallalaala');
}

// 4. never => It should not have a reachable end point i.e it should not end

let error=(): never=> {
    throw Error('Ooops!')
}


// 5 Type Assertions
interface RobotArmy{
    count: number,
    type: string,
    magic: string
}

let fightRobotArmy=(robots: RobotArmy) =>{
    console.log('FIGHT!');
}

let fightRobotArmy2=(robots: {  count: number, // Both fightRobotArmy and fightRobotArmy2 are the same
    type: string,
    magic: string}) =>{
    console.log('FIGHT!');
}

let fightRobotArmy3=(robots: RobotArmy): void =>{
    console.log('FIGHT!');
}

let fightRobotArmy4 = (robots: RobotArmy): number => {
    return 4
}


interface CatArmy{
    count: number,
    type: string,
    magic?: string
}

//Classes in TypeScript

class Animal {
    public sing: string ='lalalala'
    constructor(sound: string) {
        this.sing = sound
    }

    greet(): string{
        return `Hello ${this.sing}` 
   }
}

let Lion = new Animal('roooarr');

// console.log(Lion.sing)


