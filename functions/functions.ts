function square(num:number){
    return num*num
}
square(3)


// function greet(person:string){
    
//     return `hi there,${person}`
// }

const doSomething = (person :string,age:number,isFunny:boolean) => {


}

doSomething('chicken',32,false)



function greet(person:string="stranger"):string{
    return `hi there,${person}`
}

greet()
greet('tony')





function rando(num:number) {
    if(Math.random() < 0.5){
        return num.toString()
    }
    return num
}


const add = (x:number,y:number) : number =>{
    return x+y
}

const colors = ['red','range','yellow']

colors.forEach((color)=>{
    return color.toUpperCase()

})



function printTwice(msg:string):void{
    console.log(msg)
    console.log(msg)
 
}
// never type happends in these 2 situations: 
// infinite loop
// throw error

function makeError(msg:string):never{
    throw new Error(msg)
}

function gameLoop():never{
    while(true){
        console.log('game loop running')
    }
}