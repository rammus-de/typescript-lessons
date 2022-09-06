// interfaces
// interfaces serve almost the exact same purpose as type aliases(with slightly different syntax)
// we can use them to create usable ,modulat types that describe the shape of objects

// type Point = {
//     x:number,
//     y:number
// }

// const pt:Point = {x:213,y:2}

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 3, y: 2 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: (name: string) => string;
  sayBye?(): string;
}

const thomas: Person = {
  id: 2,
  first: "thomas",
  last: "muller",
  sayHi: (name: string) => {
    return name;
  },
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "blue shuede shoes",
  price: 100,
  applyDiscount(discount) {
    // :| wtf
    return discount * 10;
  },
};

shoes.applyDiscount(40);
// ---------------------------------------------------------
// adding new properties to interface
// reopening interfaces

// option 1
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark: () => string;
}
// now dog interface has name,age,breed,bark method and property
// they are combined
// this is the feature of interface ,we can not do that in Type aliases and we will get error if we do
const elton: Dog = {
  age: 2,
  bark: () => "woooooooooooof!",
  breed: "austalian shepherd",
  name: "elton",
};




// option 2
// extends keyword
interface ServiceDog extends Dog {
job:'drug sniffer' | 'bomb' | 'guide dog'

}   

const chewy : ServiceDog = {
    job:"bomb",
    age:20,
    bark:()=>"woooooof",
    breed:"lab",
    name:"chewy"
}



// --------------------------------------------
// inteface multiple inheritance

interface GoodPerson {
    name:string
}
interface Employee {
    readonly id :number;
    email:string
}

interface Engineer extends GoodPerson,Employee{
    level :string
    languages:string[]
}

const toby:Engineer = {
    name:"toby",
    email:"noemail@noemail.com",
    id:21,
    languages:['arabic','english','turkish'],
    level:'junior'
}


// types vs. interfaces
// you can not use interface to define literal type but with type aliases we can
// we can not use interface if we are not describing the shape of the object
// type Color = "red" | "blue"

// with interfaces we can reopen them after we created them but we can not do that with types

// gives error !
// type Chicken = {
//     breed :string
// }
// type Chicken = {
//     numEggs : number
// }


// but with interfaces its totally fine !
// interface Dog {
//     name: string;
//     age: number;
//   }
  
//   interface Dog {
//     breed: string;
//     bark: () => string;
//   }


// when it comes to extending property or inheritanding
// we can use extends keyword in interface
// but in type aliases we have to use & 
