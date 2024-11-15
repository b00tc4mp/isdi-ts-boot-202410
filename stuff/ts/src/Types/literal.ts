//Literal Type
//No solo son un type sino que son el valor en si mismo !
//Combinado con los union types, pueden ser mucha ayuda

let zero: 0 = 0;
// zero = 2; //This will fail with this error: Type '2' is not assignable to type '0'.

type AnswerType = "yes" | "no" | "maybe";

const giveAnswer = (answer: AnswerType): string => `The answer is ${answer}`;

console.log("givenAnswer() :>> ", giveAnswer("maybe"));

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

function greet(name: string, day: DayOfWeek): string {
  return `Happy ${day}, ${name}`;
}

console.log("greet() :>> ", greet("Anderson", "Monday"));

//Exercise

//Create a literal type called SkillLevel => "Beginner" , "Intermediate", "Advanced", "Expert"

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

//Create a type called IsdiSchoolStudent

type IsdiSchoolStudent = {
  name: string;
  age: number;
  sport: "basket" | "judo";
  level: SkillLevel;
};

//Define a type to represent RGB colors

type Rgb = {
  r: number;
  g: number;
  b: number;
};

//Define a type to represent HSL colors

type Hsl = {
  h: number;
  s: number;
  l: number;
};

//Create an array called colors thar can hold a mixture of Rgb and Hsl types

const colors: (Rgb | Hsl)[] = [
  { r: 255, g: 100, b: 0 },
  { h: 120, s: 0, l: 245 },
];

//Write a function called sayHello thar acepts a single string or an array of strings
//It should print "Hello, <name>" for that single person or greet each person in the array
//with the same format

function sayHello(name: string | string[]): void {
  if (typeof name === "string") {
    console.log(`Hello, ${name}`);
  } else {
    name.forEach((name) => console.log(`Hello, ${name}`));
  }
}

console.log(sayHello("Moya"));
console.log(sayHello(["Michale", "Johanson", "Rachel"]));
