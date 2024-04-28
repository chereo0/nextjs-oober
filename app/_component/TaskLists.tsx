import React, { useState } from 'react'
import Card from './Card'
import Booking from './Booking'

function TaskLists(props:any) {
    const [selectTask,SetselectTask]=useState<any>([])
  return (
    <div>
      {props.tasLists.map((tas:any,index:number)=>(
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
         key={index} onClick={()=>{(document as any).getElementById('my_modal_4').showModal();
         SetselectTask(tas)}}>
            <Card tas={tas}/>
            </div>
      ))}
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="my_modal_4" className="modal">
<Booking Tas={SetselectTask}/>
</dialog>
      
    </div>
  )
}

export default TaskLists
