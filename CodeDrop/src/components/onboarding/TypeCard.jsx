import React, { useState } from 'react';

function TypeCard() {
  var Data = [
    {
    icon:'#',
    category:'Developer',
    description:'I write code'
  },
    {
    icon:'#',
    category:'Developer',
    description:'I write code'
  },
    {
    icon:'#',
    category:'Developer',
    description:'I write code'
  },
    {
    icon:'#',
    category:'Developer',
    description:'I write code'
  },
    {
    icon:'#',
    category:'Developer',
    description:'I write code'
  },
]
const [active,setActive] = useState(0)

function activeCard(index) {
  setActive(index)
  
}

 return (
     <div className='w-[100%] min-h-[60%] grid grid-cols-3  gap-6  p-5'>
    { Data.map((items, index) => (
     <div 
        key={index}
        onClick={()=> activeCard(index)}
       className= {` min-h-[180px] p-6 transition-all duration-300 ease-out 
         ${active === index ? "border-purple-500/60 bg-gradient-to-br shadow-[_0_0_30px_rgba(139,92,246,0.45)] scale-[1.02] from-purple-950/40  via-purple-950/20  to-transparent" : "border-[#71717a] bg-[#030305]/80"} border  
         rounded-lg flex flex-col justify-center gap-5 items-center cursor-pointer  hover:border-purple-950/40 hover:bg-purple-950/10 hover:shadow-[_0_0_6px_rgba(139,92,246,0.45)] scale-[1.02]`}>

       <span className={`text-6xl ${active === index ? "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.7]":"text-purple-500/80"}`}>{items.icon}</span>
       <h2 className='text-lg text-white font-semibold'>{items.category}</h2>

       <p className='text-xl text-[#71717a] leading-5'>{items.description}</p>
       </div>))}
       </div>
       )
}

export default TypeCard