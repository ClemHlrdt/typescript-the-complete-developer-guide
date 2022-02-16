import { User } from './models/User';

const collection = User.buildUSerCollection();

collection.on('change', () => {
  console.log(collection);

});

collection.fetch();
