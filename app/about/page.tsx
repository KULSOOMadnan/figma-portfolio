import React from 'react'
import Aboutme from '@/components/Aboutme'
import Contact from '@/components/Contact'
function About() {
  return (
    <div className='h-[150vh] my-28 '>
        <Aboutme/>
        <div className='border-b-2 border-[#606060] w-[85%] mx-auto flex justify-center my-16 '> </div>
        <Contact/>
    </div>
  )
}

export default About