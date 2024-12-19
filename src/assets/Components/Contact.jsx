import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='flex min-h-[70vh] min-w-full items-center justify-center'>
      <div className='flex flex-col items-center justify-center gap-3 space-y-6 p-14'>
        <h1 className='text-center text-5xl md:text-7xl'><span className='bg-gradient-to-r from-orange-500 to-slate-600 bg-clip-text text-transparent'>Get In Touch</span></h1>
        <p className='text-center text-lg font-semibold text-gray-500'>Want to chat? Send me an E-mail through this button and I'll respond wenever i can</p>
        <a href="mailto:abidinsp.code@gmail.com" className='text-nowrap rounded-lg border border-slate-500 bg-orange-500 px-5 py-3 text-lg fornt-bold text-white'>Contact Me</a>
      </div>
    </div>
  )
}

export default Contact
