const drink = {
  color: 'brown',
  cardbonated: true,
  sugar: 40
};

// Type alias
type Drink = [string, boolean, number];

// Tuples
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
};