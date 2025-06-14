import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '../toggle-mode'

function Navbar() {
  return (
    <div className='sticky top-0'>
        <nav >
            <ul className='flex flex-row justify-center items-center p-5 gap-5 bg-gray-300 text-black'>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/dashboard'>Dashboard</Link></li>
                <li><Link href='/anime'>Anime</Link></li>
                <li><Link href='/about'>About</Link></li>
            <ModeToggle />
            </ul>
        </nav>
    </div>
  )
}

export default Navbar