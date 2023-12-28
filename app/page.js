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

  const uniqueCategories = [
    ...new Set(isTickets?.map(({ category }) => category)),
  ];
  return (
    <div className='p-5'>
      {isTickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => <div key={categoryIndex} className='mb-4'>
          <h2>{uniqueCategory}</h2>

          <div className='lg:grid grid-cols-2 xl:grid-cols-4'>
        
          {isTickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
            <TicketCard id={filteredTicket._id} key={_index} ticket={filteredTicket}
            />
          ))}
      </div>
        </div>)}
    </div>
  )
}
