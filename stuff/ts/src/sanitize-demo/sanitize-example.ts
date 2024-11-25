type PersonType = {
  _id: string;
  name: string;
  surname: string;
  age: number;
  __v: number;
};

type FormatedPersonType = {
  id: string;
  name: string;
  surname: string;
  age: number;
};

const persons: PersonType[] = [
  {
    _id: "1",
    name: "Joel",
    surname: "Suro",
    age: 23,
    __v: 0,
  },
  {
    _id: "2",
    name: "Michale",
    surname: "Parker",
    age: 15,
    __v: 0,
  },
  {
    _id: "3",
    name: "Susan",
    surname: "Fergurnson",
    age: 24,
    __v: 0,
  },
];

const sanitizePersons = (person: PersonType): FormatedPersonType => ({
  id: person._id,
  name: person.name,
  surname: person.surname,
  age: person.age,
});

const formatedPersons = persons.map<FormatedPersonType>(sanitizePersons);

console.log("formatedPersons :>> ", formatedPersons);
