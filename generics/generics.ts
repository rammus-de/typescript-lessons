// generics allos us to define reusable functions and classes that
// work with multiple types rather than a single type

// const nums:number[] = []
const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.log(inputEl);
inputEl.value = "hacked";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

//  writing my own generic

function numberIdentity(item: number): number {
  return item;
}
function stringIdentity(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item:any):any{
//     return item
// }

function identity<Type>(item: Type): Type {
  return item;
}
interface Cat {
  name: string;
  breed: string;
}

// identity<string>("i am a string")
// identity<boolean>(true)
// identity<Cat>({breed:'catish',name:"jaf"})

function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random()*arr.length)]
}

getRandomElement<number>([123,4,3,5435,45,436,35])
// inferred generic
getRandomElement([123,4,3,5435,45,436,35,])


// Generics With Multiple Types
function merge<T,U>(object1:T,object2:U){
    return{
        ...object1,...object2
    }
}

const combo = merge({name:'colt'},{pets:['blue','elton']})



// Adding Type Constraints

function merge2<T extends object,U extends object>(object1:T,object2:U){
    return{
        ...object1,...object2
    }
}



const combo2 = merge2({name:'colt'},{num:9})




interface Lengthy {
    length :number;
}

function printDoubleLength<T extends Lengthy >(thing:T):number{
    return thing.length * 2

}
function printDoubleLength2(thing:Lengthy):number{
    return thing.length * 2

}

printDoubleLength("7878")


//  Default Type Parameters

function makeEmptyList<T = number>():T[]{
return []
}
const strings = makeEmptyList()
const bools = makeEmptyList<boolean>()


//  Writing Generic Classes

interface Song {
    title:string,
    artist:string
}

interface Video {
    title:string,
    creator :string,
    resolution:string
}

class VideoPlaylist {
    public videos:Video[] = []
}
class SongPlayList{
    public songs:Song[] = []
}

class Playlist<T>{
    public queue:T[] = [];
    add(el:T){
        this.queue.push(el)
    }
}

const songs = new Playlist<Song>
songs.add({artist:"mikel",title:"come closer"})

const videos = new Playlist<Video>
