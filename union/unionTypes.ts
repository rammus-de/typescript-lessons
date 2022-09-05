let age:number|string = 21
age = 23
age = "24"


type Point = {
    x:number
    y:number
}

type Loc = {
    lat :number;
    long : number;
}

let coordinates : Point | Loc =  {x:1,y:35}

coordinates = {lat:32.231,long:32.423}


function printAge(age:number | string):void{
    console.log(`You are ${age} years old`)
}

printAge(23)
printAge("23")


// type narrowing
// type checking using typeof
function calculateTax(price:number | string,tax:number){
    if(typeof price === "string"){
        price =  parseFloat(price.replace('$',""))
        
    }
       return price*tax
    

}
// ----------------------------------------------------------
// union types and array
const nums:(number|string)[] = [12,3,5,65,"ko"]
const coords : (Point | Loc)[] = [{lat:32.231,long:32.423},{x:1,y:35}]


// --------------------------------------------------------
// literal types
const zero:0 = 0

let hi:"hi" = "hi"

let mood : "happy" | "sad" = "happy"
mood = "happy"

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
let today : DayOfWeek = "Friday"





