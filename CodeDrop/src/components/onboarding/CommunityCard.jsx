import React, { useState } from 'react';

function CommunityCard() {
var Data = [
    {
    icon:'#',
    category:'Web Developer',
  },
    {
    icon:'#',
    category:'Rust',
  },
    {
    icon:'#',
    category:'Backend',
  },
    {
    icon:'#',
    category:'DevDrop',
  },
    {
    icon:'#',
    category:'Mobile',
  },
    {
    icon:'#',
    category:'Web Developer',
  },
    {
    icon:'#',
    category:'Rust',
  },
    {
    icon:'#',
    category:'Backend',
  },
    {
    icon:'#',
    category:'DevDrop',
  },
    {
    icon:'#',
    category:'Mobile',
  },
    {
    icon:'#',
    category:'Web Developer',
  },
    {
    icon:'#',
    category:'Rust',
  },
    {
    icon:'#',
    category:'Backend',
  },
    {
    icon:'#',
    category:'DevDrop',
  },
    {
    icon:'#',
    category:'Mobile',
  },
]
const [active,setActive] = useState(0)

function activeCard(index) {
  setActive(index)
  
}

 return (
     <div className='w-full flex gap-3 flex-wrap p-5 '>
    { Data.map((items, index) => (
     <button
        key={index}
        onClick={()=> activeCard(index)}
       className= {`transition-all duration-300 ease-out 
         ${active === index ? "border-purple-500/60 bg-950/10 shadow-[0_0_20px_rgba(139,92,246,0.25)]"  : "border-[#272333] bg-[#14111f]/80"} border  
         rounded-lg flex  justify-center gap-2 items-center cursor-pointer  hover:border-purple-500/40 hover:bg-[#1a1528] px-5 h-[48px] shadow-[0_0_12px_rgba(0,0,0,0.25)]`}>

       <span className={`text-lg ${active === index ? "text-purple-400":"text-[#71717a]"}`}>{items.icon}</span>
       <p className={`text-xl ${active === index ? "text-purple-400":"text-[#71717a]"} leading-5 capitalize`}>{items.category}</p>

       </button>))}
       </div>
       )
}

export default CommunityCard