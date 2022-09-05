let movieTitle:string = 'Amadeus';
movieTitle = 'Arrival'
movieTitle = 9

movieTitle.toUpperCase()

let numCatLives:number = 9
numCatLives+=1;
numCatLives = 'zero'


let gameOver:boolean = false
gameOver = true;
gameOver = 'true'



// type inference
let tvShow = 'dorehami'
tvShow = 'the other two'
tvShow = false


let isFunny = false
isFunny = true
isFunny = 'asd'


// the  any type

let thing:any = 'hello';
thing = 1
thing = false
thing()
thing.toUpperCase()

const movies = ['arrival','the thing','aliens','amadeus']
let foundMoive:string;

for(let movie of movies){
    if(movie === "amadeus"){
        foundMoive = "amadeus"
    }
  
}

