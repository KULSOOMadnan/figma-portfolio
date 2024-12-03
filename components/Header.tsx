'use client'
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <nav className='fixed w-full bg-white left-0 right-0 top-0'>
      <div className='flex px-20 py-8 justify-between items-center container mx-auto'>
        <div className='text-2xl font-bold'>soom.</div>
        <ul className='flex flex-row gap-6 font-medium'>
          <li><Link href='/' className='hover:text-gray-600'>Work</Link></li>
          <li><Link href='/about' className='hover:text-gray-600'>About</Link></li>
          <li><Link href='/' className='hover:text-gray-600'>Playground</Link></li>
          <li><Link href='/' className='hover:text-gray-600'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
