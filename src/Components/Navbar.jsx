import React from 'react'
import shopCart from '../assets/shopping-cart.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const cart = useSelector((state) => state.cart)
  return (
    <div>
        <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
          <div>
          <NavLink className="ml-5" to='/'>
            <p className='text-3xl font-bold text-[cursive]'>ShopCart</p>
          </NavLink>
          </div>
     
          <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to='/'>
            <p>Home</p>
            </NavLink>
            <div className='relative'>
           <NavLink to='/cart'>
           <img className='bg-white rounded-full p-2 ' src={shopCart} width={40}/>
           {cart.length > 0 &&   <span className='absolute top-1 right-0 
           text-xs bg-green-600 w-5 h-5 flex justify-center items-center animate-bounce
           rounded-full text-white'>{cart.length}</span>
          }
           </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar