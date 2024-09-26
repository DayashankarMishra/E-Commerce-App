import React, { useState } from 'react'
import CartContext from './CartContext'
import { toast } from 'react-toastify'

const CartState = (props) => {
    let [cartArr,setCartArr] = useState([])
    // console.log(cartArr)

    const addToCart = (ans)=>{
        // console.log(ans)
        let products = [...cartArr,ans]
        // console.log(products)
        setCartArr(products)
        
        
    }
  return (
    <CartContext.Provider value={{cartArr,setCartArr,addToCart}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
