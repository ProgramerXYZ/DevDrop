import { useState } from "react";

function InterestChip() {
const data = [
    {
      name: "Rustaceans",
      members: "129K members",
      description: "The Rust programming language community.",
      icon: "🦀",
    },
    {
      name: "Web Dev",
      members: "215K members",
      description: "For developers building for the web.",
      icon: "⌘",
    },
    {
      name: "Open Source",
      members: "210K members",
      description: "Everything open source.",
      icon: "◉",
    },
    {
      name: "AI / ML",
      members: "173K members",
      description: "Machine Learning & AI discussions.",
      icon: "✦",
    },
    {
      name: "DevOps",
      members: "98K members",
      description: "Infrastructure, CI/CD and more.",
      icon: "◈",
    },
    {
      name: "Game Dev",
      members: "97K members",
      description: "Game development resources.",
      icon: "◉",
    },
];

  const [selected, setSelected] = useState([]);

  const toggleCommunity = (index) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="w-full p-[25px] max-h-[70%] overflow-y-auto">
      <div className="flex flex-col gap-2">
        {data.map((item, index) => {
          const isSelected = selected.includes(index);
        return (
        <button
         key={index}
         type="button"
         onClick={() => toggleCommunity(index)}

         className={ ` cursor-pointer w-full min-h-[65px] px-3 sm:px-4 py-2 flex items-center gap-3 rounded-lg border text-left transition-all duration-200 ${ isSelected ? "border-purple-500/50 bg-purple-950/25 shadow-[0_0_15px_rgba(139,92,246,0.08)]":" border-[#272333] bg-[#14111f] hover:border-purple-500/30 hover:bg-[#1a1528]"}`}>


              {/* Community Icon */}
              <div
              className={`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border text-lg
                 ${isSelected? "border-purple-500/40 bg-purple-500/10 text-purple-400": "border-[#272333] bg-[#0e0c16] text-purple-400"}`}>
                {item.icon}
              </div>


              {/* Community Info */}
              <div className="min-w-0 flex-1">
                <h3 className={`text-sm font-medium truncate ${isSelected ? "text-white": "text-zinc-200"}`}>
                  {item.name}
                </h3>

                <p className="text-[11px] text-[#71717a] mt-0.5">
                  {item.members}
                </p>
              </div>

              {/* Description */}
              <p className=" hidden sm:block w-[230px] shrink-0 text-[11px]leading-4 text-[#71717a] truncate">
                {item.description}
              </p>

              {/* Checkbox */}
              <div className={`shrink-0 w-5 h-5 rounded-[5px] flex items-center justify-center border transition-all duration-200 ${ isSelected ? "border-purple-500 bg-purple-600 text-white" : "border-[#3f3f46] bg-[#0e0c16]"}`}>
              {isSelected && (
                  <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5">
                    <path
                      d="M5 10.5L8.5 14L15 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"/>
                  </svg> )}
               </div>

            </button>
          );
        })}
      </div>
    </div>
  );
}

export default InterestChip;