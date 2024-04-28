import React, { useEffect, useState } from 'react'

function TaskFilter({tasLists,setCat}:any) {
    const[catTask,setTaskList]=useState<any>();
    const Taskcat=new Set()
    useEffect(()=>{
        if(tasLists)
            {
                filterTaskList(); 
            }
    },[tasLists])
  const filterTaskList=()=>{
    tasLists.forEach((element:any) => {
 Taskcat.add(element.taskcat);       
    });
    console.log(Taskcat)
    setTaskList(Array.from(Taskcat));
  }
    return (
    <div className='mt-10 flex items-center justify-between'>
      <div>
        <h2 className='text-[30px] font-bold'>Task Catalog</h2>
        <h2>Explore our tasks you might like</h2>
      </div>
      <div className='flex gap-3'>
      <select className="select select-bordered w-full max-w-xs"
      onChange={(e)=>setCat(e.target.value)}>
  <option disabled selected>Task Catalog</option>
  {catTask && catTask.map((brand:string,index:number)=>(
  <option key={index}>{brand}</option>

  ))}
</select>
      </div>
    </div>
  )
}

export default TaskFilter
