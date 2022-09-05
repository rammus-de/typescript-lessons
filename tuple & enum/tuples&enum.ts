// tuples are a special type exclusive to typescript
// tuples are array of fixed lengths and ordered with specific types

const color:[number,number,number] = [255,0,255]

type HTTPResponse = [number,string]

const goodRes:HTTPResponse = [200,'OK']
goodRes.push(123)
goodRes.pop()
goodRes.pop()
goodRes.pop()


const responses:HTTPResponse[] = [[404,"Not Found"],[200,"OK"]]

// ---------------------------------------------------------
// enums
// enums allow us to define a set of named constants we can give these
//  constants numeric or string values



enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED ,
    RETURNED 
}

const myStatus = OrderStatus.DELIVERED
function isDelivered(status:OrderStatus){
    return status === OrderStatus.DELIVERED
}
isDelivered(OrderStatus.DELIVERED)


enum ArrowKeys {
    UP = 'UP',
    DOWN ='DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

// we can even add 'const' keyword before 'enum' keyword to make much more
//  cleaner and readable code after compile typescript to javascript