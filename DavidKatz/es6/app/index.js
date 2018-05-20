const averages = [6, 15.7, 9, 18, 22.1, 9.2, 4];

const multiplier = function(dollar) {
  return Math.pow(dollar, 2);
};

const moneyMachine = averages.map(multiplier);

const celebration = function(player) {
  return player > 15;
};

const highlight = averages.filter(celebration);

console.log('---------');

let isPassing = grade => {
  return grade >= 70;
};

let scores = [90, 85, 67, 71, 70, 55, 91];

let passing = scores.filter(isPassing);

let passing1 = scores.filter(element => element >= 70);

console.log(passing, passing1);

let points = [10, 20, 30];

let addOne = element => {
  return element + 1;
};

points = points.map(addOne);

console.log('---------');

let a = 'hello';

console.log(a);
// block scoping protects vars
// from anyone outside that would want to use them
{
  let a = 'goodbye';
  console.log(a);
}

console.log('Hello World ! (from webpack - updated automatically?)');
