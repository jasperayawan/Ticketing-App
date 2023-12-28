'use client'

import React, { useEffect, useState } from 'react'
import TicketCard from './components/TicketCard'
import axios from 'axios';

export default function page() {
  const [isTickets, setIsTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      try{
        const res = await axios.get('/api/Tickets');
        
        setIsTickets(res.data.tickets)
      } 
      catch(error){
        console.log(error)
      }
    }
    getTickets();
  },[])


  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
        {isTickets.map((data, i) => (
          <div key={i}>
            <TicketCard category={data.category} createdAt={data.createdAt} description={data.description} priority={data.priority}
          progress={data.progress} status={data.status} title={data.title} updatedAt={data.updatedAt}
          />
          </div>
        ))}
      </div>
    </div>
  )
}
