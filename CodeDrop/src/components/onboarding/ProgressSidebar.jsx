// import React from "react";
import { Home,Check} from "lucide-react";


const steps = [
  "Welcome",
  "Type",
  "Interest",
  "Communities",
  "Ready",
];

function ProgressSidebar({ currentStep }) {
  return (
    <aside className="w-[260px] min-h min-h-screen px-[24px] py-[32px] flex flex-col border-r border-[#27272a]">
      <div className="text-3xl mb-[70px] font-bold text-white">
        DevDrop
      </div>

      <div className="flex flex-col gap-[40px]">
        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <>
            <div
              key={step}
              className={`flex items-center gap-[14px] text-[#71717a] font-medium relative ${
                active ? "text-white me: w-full rounded-l-full border border-r-transparent  border-purple-500/60 bg-gradient-to-r from-purple-950/40 via-purple-950/20 to-transparent  shadow-[_0_0_12px_rgba(139,92,246,0.45)] transition-all duration-200 px-3 py-4 "  : ""
              } ${completed ? "text-[#a1a1aa]" : ""}`}
            >

              <div className={`absolute  w-px h-[22px] bg-[#71717a] left-[9%] ${active ? ' bg-purple-950/40 bottom-[-50%] h-[30px] z-[-1] shadow-[_0_0_12px_rgba(139,92,246,0.45)]' : 'bottom-[-72%] '} ${completed ? "bg-purple-950/40 shadow-[_0_0_12px_rgba(139,92,246,0.45)]" : ""}`} ></div>


              <div className={`w-[40px] h-[40px] border border-[#3f3f46] text-[15px] rounded-[50%] flex items-center 
              justify-center ${ active ? 
              ' shrink-0 border-purple-400/70 bg-purple-600/25':'' }  ${completed ? ' border-purple-400/70':''}`}>
              {completed ? <Check size={26} className='bg-purple-600/25 rounded-full p-1'/> : <Home size={23} className='color-[#71717a]'/>}
              </div>
              <span className=' text-[20px]'>{step}</span>
            </div>
            </>
          );
        })}
      </div>

    </aside>
  );
}

export default ProgressSidebar;