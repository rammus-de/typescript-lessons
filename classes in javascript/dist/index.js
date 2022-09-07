class Player {
    static description = "player in our game"
    #score = 90
    #numLives = 10

    constructor(first,last){
        this.first = first
        this.last = last
        this.#secret()
    }
    set fullName(newname){
        const [first,last] = newname.split(" ")
        this.first =first
        this.last = las
    }
    get fullName(){
        return `${this.first} ${this.last}`
    }
    get score(){
        return this.#score
    }
    static randomPlayer(){
        return new Player('andy','samburg')
    }
    set score(newscore){
        if(newscore <0){
            throw new Error('score must be positive')
        }
        this.#score = newscore
    }
    getScore(){
        return this.#score
    }
    updateScore(newScore){
        this.#score = newScore
    }
    taunt(){
        console.log('booyah')
    }
    loseLife(){
        this.#numLives -=1
    }
    #secret(){
        console.log('secret')
    }
}

class AdminPlayer extends Player {
    isAdmin = true
    constructor(powers,first,last){
        super(first,last)
        this.powers = powers
    }
}

const admin = new AdminPlayer()

console.log(Player.description)
const player1 = new Player("blue","steele",['jump','kill'])
player1.taunt()
console.log(player1.first)
console.log(player1.last)
player1.loseLife()
player1.score =3
player1.updateScore(28)
console.log(player1.getScore())
console.log(player1.fullName)
console.log(player1.score)
console.log(admin.isAdmin)
admin.taunt()
console.log(admin.powers)