"use client"
import Image from "next/image";
import Hero from "./_component/Hero";
import Search from "./_component/Search";
import TaskFilter from "./_component/TaskFilter";
import { useEffect, useState } from "react";
import { GetTaskList } from "..";
import TaskLists from "./_component/TaskLists";
import Toast from "./_component/Toast";
import { BookCreated } from "./BookCreated";

export default function Home() {
  const[tasLists,setTaskLists]=useState<any>([])
  const[tasOrgLists,setTaskOrgLists]=useState<any>([])
  const[Toastmsg,setToastmsg]=useState<boolean>(false);
  useEffect(()=>{
    getTaskList_();
      },[])
      const getTaskList_=async()=>{
        const result:any=await GetTaskList();
        setTaskLists(result?.tasLists)
        setTaskOrgLists(result?.tasLists)
        }
        const filterTaskList=(brand:string)=>{
          const filterList=tasOrgLists.filter((item:any)=>
          item.taskcat==brand);
          setTaskLists(filterList);
        }
        useEffect(()=>{
          if(Toastmsg)
            {
              setTimeout(function(){
                setToastmsg(false)
              },4000);
            }
        },[Toastmsg])
  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreated.Provider value={{Toastmsg,setToastmsg}}>
      <Hero/>
      <Search/>
      <TaskFilter tasLists={tasOrgLists}
     setCat={(value:string)=>filterTaskList(value)} />
      <TaskLists tasLists={tasLists}/>
    {Toastmsg?<Toast msg={'Booking Created successfully!'}/>:null}
    </BookCreated.Provider>
    </div>
  );
}
