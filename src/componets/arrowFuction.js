const square = function (x) {
  return x * x;
};

function square(x) {
  return x * x;
}

const squareArrow = (x) => {
  return x * x;
};

const squareArrow = (x) => x * x;

const Multiplayer = {
  numbers: [10, 20, 30],
  multiplayBy: 3,
  multiplay() {
    return this.numbers.map((number) => number * this.multiplayBy);
  },
};
