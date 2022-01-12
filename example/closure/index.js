const Counter = (initValue) => {
  let counter = initValue;

  return (cb) => {
    counter = cb(counter);
    return counter;
  };
};

const increase = (number) => ++number;

const decrease = (number) => --number;

const myCounter = Counter(5);

console.log(myCounter(decrease));
console.log(myCounter(decrease));
console.log(myCounter(decrease));
console.log(myCounter(decrease));
console.log(myCounter(decrease));
console.log(myCounter(increase));
console.log(myCounter(increase));
console.log(myCounter(increase));
console.log(myCounter(increase));
console.log(myCounter(increase));
