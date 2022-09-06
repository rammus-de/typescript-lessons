interface Product {
    price:number,
    name:string,
    quantity:number
}

const printPorduct = (product:Product):void => {
    console.log(`${product.name} -$${product.price}`)
}