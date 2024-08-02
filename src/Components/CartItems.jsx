import React from 'react'
import toast from 'react-hot-toast';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { remove } from '../Redux/slices/CartSlice';

const CartItems = ({item , itemIndex}) => {
   
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed")
  }

  return (
    <div>
        <div className=''> 
          <div className='p-6'>
            <img src={item.image} width={220} />
          </div>
          <div className='flex flex-col justify-center w-[350px]'>
            <h1 className='font-bold text-xl'>{item.title}</h1>
            <h1>{item.description.split(" ").slice(0 , 10).join(" ") + "..."} </h1>
            <div className='flex justify-between'>
              <p className='text-green-600 font-semibold'>${item.price}</p>
              <RiDeleteBin6Fill className='text-red-800 bg-red-200 rounded-full
              p-3 text-4xl cursor-pointer' onClick={removeFromCart} />
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default CartItems