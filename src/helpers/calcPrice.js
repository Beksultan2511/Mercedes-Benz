export const calcSubPrice = (cartProduct) => {
    return cartProduct.count * cartProduct.product.price
}
export const calcTotalPrice = (products)=>{
    let totalPrice = 0
    products.forEach((item)=>{
        totalPrice += item.subPrice
    })
    return totalPrice
}