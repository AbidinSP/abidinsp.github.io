import React from 'react'
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoTailwindCss } from 'react-icons/bi'

const Skills = () => (
  <div id="skills" className='flex min-h-[70vh] w-full flex-col gap-2 md:gap-4 items-center justify-center'>
    <h1 className='text-4xl font-semibold bg-gradient-to-r from-orange-600 to-slate-800 bg-clip-text text-transparent md-text-6xl'>Skills</h1>

    <div className='flex flex-wrap items-center justify-center gap-2 p-10'>
      <div>
        <BiLogoHtml5 className='cursor-pointer text-[800px] text-orange-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md-[120px]'/>
      </div>
      <div>
        <BiLogoCss3 className='cursor-pointer text-[800px] text-sky-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md-[120px]'/>
      </div>
      <div>
        <BiLogoJavascript className='cursor-pointer text-[800px] text-yellow-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md-[120px]'/>
      </div>
      <div>
        <BiLogoReact className='cursor-pointer text-[800px] text-sky-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md-[120px]'/>
      </div>
      <div>
        <BiLogoTailwindCss className='cursor-pointer text-[800px] text-sky-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md-[120px]'/>
      </div>
    </div>

  </div>
)

export default Skills
