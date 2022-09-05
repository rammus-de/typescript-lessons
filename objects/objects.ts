type Point = {
  x: number;
  y: number;
};
function printName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

printName({ firstName: "thomas", lastName: "muller" });

let coordinate: Point = { x: 34, y: 42 };
const randomCordinate = (): Point => {
  return { x: Math.random(), y: Math.random() };
};

function printNameWithDefaultValue(
  person: { firstName: string; lastName: string } = {
    firstName: "ali",
    lastName: "mohammadi",
  }
) {
  console.log(`${person.firstName} ${person.lastName}`);
}
printNameWithDefaultValue();

// nokte mohem  : inline age arg ro vared konim sakhtgiri bishtare mikone ta inke ye object ro behesh pass bedim
// printName({ firstName: "mick", lastName: "jagger", age: 423 });

const singer = {
  firstName: "mike",
  lastName: "raphinha",
  age: 45,
  isAlive: true,
};
printName(singer);

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

type MyNum = number;
let age: MyNum = 2332;

// -----------------------------------------
// type
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  };
};

function calculatePaylout(song: Song): number {
  return song.numStreams * 0.00033;
}

function printSong(song: Song): void {
  console.log(`${song.title}-${song.artist}`);
}

const mySong: Song = {
  title: "unchained melody",
  artist: "righteous brothers",
  numStreams: 134242,
  credits: {
    producer: "phil spector",
    writer: "alex north",
  },
};

const earnings = calculatePaylout(mySong);
console.log(earnings)
printSong(mySong);
// ----------------------------------------
// optional 
type OptionalPoint = {
    x:number;
    y:number;
    z?:number;
}

const myPoint : OptionalPoint = {x:24,y:49}


// ----------------------------------------
// readonly 

type User = {
    readonly id : number ;
    username:string
}

const user:User = {
    id:123354,
    username:'catgirl'
}
// user.id = 78


// ----------------------------------------

// intersection types

type Circle = {
    radius : number;
}

type Colorful = {
    color : string
}

type ColoredCircle = Circle & Colorful

const happyFace:ColoredCircle = {radius:4,color:'red'} 

type Cat = {
    numLives:number

}

type Dog = {
    breed:string
}

type CatDog = Cat & Dog & {
    age:number
}

const christy:CatDog = {
    numLives:6,
    age:4,
    breed:"husky"
}


// --------------------------------------------