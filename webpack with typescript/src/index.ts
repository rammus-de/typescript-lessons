import Dog from './Dog'
import {add,divide,multiply} from './utlis'
import ShelterDog from './ShelterDog'
console.log('from index')

const elton = new Dog('elton','aussie',0.5)
elton.bark()
console.log(add(4,5))
console.log(multiply(4,5))
console.log(divide(4,5))
const buffy = new ShelterDog("buffy","boofy",3,"shelter")