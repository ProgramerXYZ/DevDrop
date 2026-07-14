import React from 'react'

function Hero() {
  return (
    <section className="relative min-h-screen py-32 mx-auto flex items-center overflow-hidden">
     
      {/* contianer */}

      <div className="container px-6 md:px-2 pt-32 pb-20 relative w-full mx-auto h-full grid lg:grid-cols-2 gap-2 md:gap-4">

        {/* content */}
        <div className="p-3 md:p-0">
          <h1 className="font-outfit text-5xl font-bold md:text-6xl lg:text-7xl py-2 fade-in-animation animation-delay-100"> 
            <span className="border-b-2 border-primary italic leading-tight">Your entire</span> {" "}
            <span className="text-primary">code</span>base,<br/> 
            just a single drop away.
            </h1>
          <p className="text-lg text-secondary-foreground py-2 fade-in-animation animation-delay-200">
            Forget traditional posts. In CodeDrop, your source files are shared as
             structured Drops. Share modular functions, discover production-ready logic,
              and assemble your next big breakthrough instantly with developers worldwide.</p>
        </div>
        {/* end cotent */}

        {/* our loom video */}
        <div className="relative h-[420px] p-3 flex justify-end">
          <div className="rounded-2xl overflow-hidden w-full md:w-[90%] h-full scale-100 right-0 border border-border shadow-lg shadow-primary/20 fade-in-animation animation-delay-400"> 
          <iframe 
            className="w-full h-full"  
            src="https://www.loom.com/embed/9b5ffd6cb89c4cd8a3cb4cb8b6fd3004" 
            frameBorder="0" 
            allowFullScreen
          ></iframe>
          </div>
          
        </div>
        {/* end image */}

      </div>
      {/* end conatiner */}

    </section>
  )
}

export default Hero;
