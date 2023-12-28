'use client'

import React from 'react'
import { IoIosHome } from "react-icons/io";
import { FaTicket } from "react-icons/fa6";
import Link from 'next/link'

export default function Nav() {
  return (
    <div>
      <nav className='flex justify-between items-center px-4 py-2 bg-nav'>
        <div className="flex flex-row gap-x-2 text-default-text">
        <Link href='/' passHref>
            <IoIosHome className='cursor-pointer'/>
        </Link>
        <Link href='/TicketPage/123' passHref>
            <FaTicket className='cursor-pointer'/>
        </Link>
        </div>

        <span className='text-default-text text-sm'>@Jasperayawan</span>
    </nav>
    </div>
  )
}