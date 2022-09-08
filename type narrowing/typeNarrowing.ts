// when we are working with primitive types(string,boolean,number) 'typeof' keyword is great
function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// truthiness guards

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("you did not pass in a word");
  }
};

// equality narrowing
function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}
someDemo(3, "3");

//  Narrowing With The In Operator

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getDuration(media: TVShow | Movie) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

getDuration({ title: "amadeus", duration: 89, episodeDuration: 89 });

// Instanceif Narrowing
function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString);
  } else {
    console.log(new Date(date).toUTCString);
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
  } else {
  }
}


// type predicates
interface Cat{
    name:string,
    numLives:number
}

interface Dog{
    name:string,
    breed:string
}
function isCat(animal) :animal is Cat{
    return (animal as Cat).numLives !== undefined
}
function makeNoise(animal:Cat|Dog):string{
    if(isCat(animal)){
        animal
        return "Meow"
    }
    else{
        return  "im not a cat"
    }

}

//  Discriminated Unions

interface Rooster {
    kind:'rooster'
    name:string;
    weight:number;
    age:number;
}
interface Cow{
    kind:'cow'
    name:string;
    weight:number;
    age:number
}

interface Pig{
    kind:'pig'
    name:string;
    weight:number;
    age:number
}
interface Sheep{
    kind:'sheep'
    name:string;
    weight:number;
    age:number
}
type FarmAnimal = Pig |Rooster|Cow | Sheep

function getFarmAnimalSound(animal:FarmAnimal){
    switch(animal.kind){
        case("pig"):
        return "oink"
        case("cow"):
        return "mowwww"
        case("rooster"):
        return "whatatatatatatata"
        case("sheep"):
        return "baaaaaa"
        default:
            // we should never make it here if we handled all cases correctly
            const _exhaustiveCheck:never = animal
            return _exhaustiveCheck
       

    }

}
const stevie :Rooster = {
    name:"steevie chicks",
    age:1.2,
    kind:"rooster",
    weight:2
}
const farmAnimal = getFarmAnimalSound(stevie)



//  Exhaustiveness Checks With Never

