import { User } from "./models/User";

const user = new User({ name: 'new record', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('user was chaned');
});

user.trigger('change');

// Reminder on how 'this' works in Javascript

// const colors = {
//   color: 'red',
//   printColor() {
//     console.log(this.color);
//   }
// };

// const printColor = colors.printColor;
// printColor();