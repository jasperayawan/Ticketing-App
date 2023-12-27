'use client'

import React from 'react'
import { IoIosHome } from "react-icons/io";
import { FaTicket } from "react-icons/fa6";
import Link from 'next/link'

export default function Nav({ params }) {
  return (
    <nav className='flex justify-between items-center px-4 py-2 bg-nav'>
        <div className="flex flex-row gap-x-2 text-default-text">
        <Link href='/'>
            <IoIosHome className='cursor-pointer'/>
        </Link>
        <Link href='/TicketPage/123'>
            <FaTicket className='cursor-pointer'/>
        </Link>
        </div>

        <span className='text-default-text text-sm'>@Jasperayawan</span>
    </nav>
  )
}