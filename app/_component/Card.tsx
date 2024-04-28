import { HiMiniRectangleStack,HiMiniUserGroup,HiOutlineGlobeAlt  } from "react-icons/hi2";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function Card(props:any) {
    const[tas,setTask]=useState<any>()
useEffect(()=>{
if(props.tas)
    {
        setTask(props.tas)
    }
},[props.tas])
    return tas&&(
    <div className="group bg-gray-50 p-2 sm:p-2 hover:bg-white hover:borde-[1px] cursor-pointer duration-75 border-blue-500">
        <h2 className='test-[40px] font-medium mb-2'>{tas.name}</h2>
        <h2 className='text-[28px] font-bold mb-2'>
            <span className='test-[12px] font-light'>$</span>
            {tas.price}
            <span className='test-[12px] font-light'>/month</span>
            <Image src={tas.image?.url}
            
            alt={tas.name}
            width={220}
            height={200}
            className='w-[250px] h-[150px] mb-3 object-contain'></Image>
        </h2>
        <div className="flex justify-around group-hover:hidden">
        <div className='text-center text-gray-400'>
        <HiMiniRectangleStack className="w-full text-[22px] mb-2"/>
        <h2 className="line-clamp-5 text-[14px] font-light">{tas.lastprice}</h2>
        </div>
        <div className='text-center text-gray-400'>
        <HiMiniUserGroup className="w-full text-[22px] mb-2" />
        <h2  className="line-clamp-5 text-[14px] font-light">{tas.taskType}</h2>
        </div>
        <div className='text-center text-gray-400'>
        <HiOutlineGlobeAlt className="w-full text-[22px] mb-2" />
        <h2  className="line-clamp-5 text-[14px] font-light">{tas.taskcat}</h2>
        </div>
        </div>
        <button className="hidden group-hover:flex bg-gradient-to-t from-blue-400 to-blue-500 p-2 rounded-lg text-white w-full px-5 justify-between">join now
        <span className="bg-blue-400 p-1 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" fill="currenColor"
                className="w-4 h-4 text-white">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 017.5 7.5a.75.75 0 010 1.061"></path>
            </svg>
        </span>
        </button>
    </div>
  )
}

export default Card
