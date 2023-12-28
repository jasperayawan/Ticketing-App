'use client';

import React from 'react'
import { useRouter } from 'next/navigation';
import { IoMdClose } from "react-icons/io";
import axios from 'axios';

export default function DeleteBlock({ id }) {
  const router = useRouter();

  const deletTicket = async () => {
    try{
      const res = await axios.delete(`/api/Tickets/${id}`)

      if(res.data.status === 200){
        router.refresh();
      }
    }
    catch(error){
      console.log(error)
    }
  }

  return (
    <IoMdClose onClick={deletTicket} className='text-red-400 hover:cursor-pointer hover:text-red-200'/>
  )
}
