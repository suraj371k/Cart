import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux"
import CartItem from "./CartItems"
import {Link} from "react-router-dom"

const Cart = () => {
  const cart = useSelector((state) => state.cart || []);
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc , curr) => acc + curr.price , 0) )
  }, [cart])

  return (
    <div className=''>
        {
          cart.length > 0? 
          (<div className='flex w-[100vw] justify-around pt-10'>
            <div>
              {cart.map((item , index) => (
                <div className=''>
               <CartItem key={item.id} item={item} itemIndex={index}/>
                </div>
              ))
              }
            </div>
            
            <div className='flex flex-col gap-y-6'>
              <div className=''>
                <div className='text-xl font-semibold'>
                  Your Cart
                </div>
                <div className='text-xl font-semibold'>Summary</div>
                <p>
                  <span>Total items: {cart.length}</span>
                </p>
              </div>
              <div>
              <p className='text-green-600 '>Total Amount: ${totalAmount}</p>
              <button className='px-6 py-3 rounded-xl bg-slate-400'>Checkout Now</button>
              </div>
            </div>

          </div>):
          (
            <div className='flex items-center flex-col mt-40 '>
              <h1 className='text-3xl font-semibold p-6'>Cart Empty</h1>
              <Link to={'/'}>
              <button className='px-5 py-3 rounded-full bg-green-800 text-white'>Shop Now</button>
              </Link>
            </div>
          )
        }
    </div>
  )
}

export default Cart