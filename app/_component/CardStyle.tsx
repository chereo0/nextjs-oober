
import { Storedloc,Storedform} from '@/index'
import React, { useContext, useEffect, useState } from 'react'
import { BookCreated } from '../BookCreated';

function CardStyle({Tas}:any) {
    const[storeloc,setstoreloc]=useState<any>([]);
    const{Toastmsg,setToastmsg}=useContext(BookCreated)
    const[formvalue,setformvalue]=useState({
        location:'',
        pickupDate:'',
        dropoffDate:'',
        pickupTime:'',
        dropoffTime:'',
        contactNumber:'',
        tasList: {connect: 
            {id: ""}}
    })

    useEffect(()=>{
        getstoredloc(); 
    },[]);
    useEffect(()=>{
        if(Tas)
            {
                setformvalue({
                    ...formvalue,
                    tasList: {connect: 
                        {id: Tas.id}}
                })
            }
    },[Tas])
    const getstoredloc=async()=>{
        const resp:any=await Storedloc();
        console.log(resp);
        setstoreloc(resp?.storedlocations)
    }
    const handleChange=(event:any)=>{
        setformvalue({
            ...formvalue,
            [event.target.name]:event.target.value
        })
    }
    const handleSubmit=async()=>{
        console.log(formvalue);
        const resp=await Storedform(formvalue);
        console.log(resp);
        if(resp)
            {
                setToastmsg(true);
            }
    }
  return (
    
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-400'>Pickup Location</label>
            <select className='select select-bordered w-full max-w-xs' name='location' onChange={handleChange}>
                <option disabled selected>pickup Location?</option>
            {storeloc&&storeloc.map((loc:any,indexx:number)=>(
                <option key={indexx}>{loc.adress}</option>
            ))}
            </select>
        </div>
        <div className='flex flex-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-500'>pick up the date</label>
                <input type='date' placeholder='type here' name='pickupDate' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
            </div>
        <div className='flex flex-col w-full'>
                <label className='text-gray-500'>pick up the date</label>
                <input type='date' placeholder='type here' name='dropoffDate' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
            </div>
            </div>
            <div className='flex  gap-5 '>
            <div className='flex flex-col w-full'>
            <label className='text-gray-500'>pick up time</label>
            <input type='time' placeholder='type here' name='pickupTime' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
            </div>
            <div className='flex flex-col w-full'>
            <label className='text-gray-500'>pick up time</label>
            <input type='time' placeholder='type here' name='dropoffTime' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
            </div>
                </div>
                <div className='flex flex-col w-full'>
                <label className='text-gray-500'>Contact Number</label>
                <input type='text' placeholder='type here' name='contactNumber' onChange={handleChange} className='input input-bordered w-full max-w-lg'/>
                </div>
                <div className='modal-action'>
<button className='btn bg-blue-400 text-white hover:bg-blue-800' onClick={handleSubmit}>Save</button>

    <button className='btn'>close</button>

</div>

 </div>       

  )
}

export default CardStyle
