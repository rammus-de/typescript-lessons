import axios from "axios";
import _ from 'lodash'

const rand = _.sample([45,24,2342,424,245,42,52,524])
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  Address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     printUser(res.data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    res.data.forEach(printUser)
    
  })
  .catch((e) => {
    console.log(e);
  });


function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}
