
import request, { gql } from "graphql-request"
import { useState } from "react";

export const GetTaskList=async()=>{
    const query=gql ` 
    query MyQuery {
        tasLists {
          id
          lastprice
          name
          price
          taskType
          taskcat
          image {
            url
          }
        }
      }
      
      
    `
    const requst=await request('https://api-eu-west-2.hygraph.com/v2/clv565kbu0cye08w75jqxt2ou/master',query)
    return requst;
}
export const Storedloc=async()=>{
  const query=gql `
  query MyQuery {
    storedlocations {
      adress
    }
  }
  
  
  `
  const result=await request('https://api-eu-west-2.hygraph.com/v2/clv565kbu0cye08w75jqxt2ou/master',query)
return result;
}
export const Storedform=async(formvalue:any)=>{
  const mutationQuery=gql `
  mutation MyMutation {
    createBooking(
      data: {contactNumber: "`+formvalue.contactNumber+`", 
        dropoffDate: "`+formvalue.dropoffDate+`", 
        location: "`+formvalue.location+`",
        dropoffTime: "`+formvalue.dropoffTime+`", 
        pickupDate: "`+formvalue.pickupDate+`", 
        pickupTime: "`+formvalue.pickupTime+`"}
    ) {
      id
    }
  }
  
  
  
  
  `
  const res=await request('https://api-eu-west-2.hygraph.com/v2/clv565kbu0cye08w75jqxt2ou/master',mutationQuery)
  return res;
}

