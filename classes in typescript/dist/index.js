"use strict";
class Player {
    constructor(first, last) {
        this._score = 0;
        this.first = first;
        this.last = last;
        this.secretMethod();
    }
    secretMethod() {
        console.log('secret method');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(score) {
        if (score < 0) {
            throw new Error("score can not be negative");
        }
        this._score = score;
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
