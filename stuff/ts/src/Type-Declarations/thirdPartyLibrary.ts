import axios from "axios";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

// axios
//   .get<User>("https://jsonplaceholder.typicode.com/users/1")
//   .then(({ data }) => printUserData(data))
//   .catch((error) => console.error(error));

function printUserData(data: User): void {
  console.log(data);
}

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then(({ data }) => data.forEach(printUserData))
  .catch((error) => console.error(error));
