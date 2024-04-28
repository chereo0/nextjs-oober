import React from 'react'
import Card from './Card'
import CardStyle from './CardStyle'

function Booking({Tas}:any) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
<div className='border-p-[1px] pb-2'>
<h3 className='text-[30px] font-light text-gray-400'>Join Now!</h3>
</div>
<div className='grid grid-cols-1
md:grid-cols-2'>
    <div>
        <Card tas={Tas}/>
    </div>
    <div>
    <CardStyle/>

    </div>

</div>

 
  </form>
  )
}

export default Booking
