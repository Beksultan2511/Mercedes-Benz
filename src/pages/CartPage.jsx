import React, { useContext, useEffect } from 'react';
import CartTable from '../components/CartTable';
import { productContext } from '../context/MyProvider';

const CartPage = () => {
    const {getCart, cart} = useContext(productContext)
    useEffect(()=>{
        getCart()
    },[])
    if(!cart){
        return <h2>Loading...</h2>
    }
    if(cart.products.length === 0){
        return <h2>The cart is empty</h2>
    }
    return (
        <div>
            <CartTable cart={cart}/>
        </div>
    );
};

export default CartPage;