var sum = function (a, b) {
    return a + b;
};
var answer = sum(4, 5);
console.log(answer);
var isCool = true;
// number
var age = 56;
//string
var eyeColor = 'brown';
var favoriteQuote = "I'm not old, I'm only ".concat(age, " years old");
//Array 
var pets = ['cats', 'dogs', 'pigs'];
var pet2 = [2, 'dogs', 'pigs'];
//Object
var wizard = {
    name: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
//Uncommon Types in TypeScript
//1. Tuple
var basket;
basket = ['basketball', 5];
//2. Enum
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {})); //Enum are used for iteratables mostly for defining a contant values
var sizeName = Size.small; // Its declaraion is similar to an object but differs a little bit
// 3. void => It should have a reachable end point, It should end or return something
var sing = function () {
    console.log('lalallalaala');
};
// 4. never => It should not have a reachable end point i.e it should not end
var error = function () {
    throw Error('Ooops!');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy2 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT!');
};
var fightRobotArmy4 = function (robots) {
    return 4;
};
//Classes in TypeScript
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalala';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello ".concat(this.sing);
    };
    return Animal;
}());
var Lion = new Animal('roooarr');
// console.log(Lion.sing)
