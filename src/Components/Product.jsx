import React from 'react'
import {toast} from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import {add , remove} from '../Redux/slices/CartSlice'

const Product = ({post}) => {

  const {cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () =>{
    dispatch(add(post))
    toast.success("Item added to cart");
  }

  const removeFromCart = () =>{
    dispatch(remove(post.id))
    toast.error("Item remove from cart")
  }

  return (
    <div className='flex flex-col items-center justify-between hover:scale-110 transition
    duration-300 ease-in shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]
    gap-3 p-4 mt-10 ml-5 rounded-xl'>
       <div>
        <p className='text-gray-700 font-semibold text-lg text-left truncate 
        w-48 mt-1'>{post.title}</p>
       </div>
       <div>
        <p className='w-40 text-gray-400 font-normal text-lg text-left'>{post.description.split(" ").slice(0 , 10).join(" ") + "..."}</p>
       </div>
       <div>
        <img className='h-[180px]' src={`${post.image}`}/>
       </div>
<div className='flex gap-12'>
<div>
        <p className='text-green-600 font-bold'>${post.price}</p>
       </div>
        {
          cart.some((p) => p.id === post.id)?
          (<button
           className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
           text-sm p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition
           duration-300 ease-in'
          onClick={removeFromCart}>
            Remove Item
          </button>):
          (<button
          className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-sm p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition
          duration-300 ease-in'
          onClick={addToCart}>
            Add to Cart
          </button>)
        }
</div>
    </div>
  )
}

export default Product