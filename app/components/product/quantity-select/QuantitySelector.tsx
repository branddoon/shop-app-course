'use client';
import { useState } from "react"
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5"

interface Props {
    quantity: number
}

export const QuantitySelector = ({quantity}:Props) => {

   const [count, setCound] = useState(quantity);

   const onQuantityChanged = (value : number)=>{
    if( count + value < 1) return;
    setCound(count + value);
   }

  return (
    <div className="flex">
        <button onClick={() => onQuantityChanged(-1)}>
            <IoRemoveCircleOutline size={30}/>
        </button>
        <span className="w-20 mx-3 px-4 bg-gray-200 text-center rounded-2xl">
            {count}
        </span>
        <button onClick={() => onQuantityChanged(+1)}>
            <IoAddCircleOutline size={30}/>
        </button>
    </div>
  )
}
