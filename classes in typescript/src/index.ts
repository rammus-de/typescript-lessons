class Player {
  public readonly first: string;
  public readonly last: string;
  protected _score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
    this.secretMethod();
  }
  private secretMethod() {
    console.log("secret method");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }
  set score(score) {
    if (score < 0) {
      throw new Error("score can not be negative");
    }
    this._score = score;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 9999;
  }
}

// class Player {

//   constructor(public first: string, public last: string,private score:number) {}
//   private secretMethod() {
//     console.log("secret method");
//   }
// }

const elton = new Player("elton", "steele");
console.log(elton.fullName);













// interface   
interface Colorful {
  color: string;
}

interface Printable {
  print(text: string): void;
}

class Bike implements Colorful {
  color: string;
  constructor(color: string) {
    this.color = color;
  }
}


class Jacket implements Colorful, Printable {
  constructor(public color: string, public brand: string) {}

  print(text: string): void {
    console.log(text);
  }
}

const Jacket1 = new Jacket("red", "prada");










// abstract class

abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("hello");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private horlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.horlyRate * this.hoursWorked;
  }
}
