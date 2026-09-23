import Button from '@/components/Button';
import CodeDropLogo from '@/assets/logos/codedroplogo.jpg';




function Ready() {
  return <section className='w-full h-screen px-[40px] pt-[40px] pb-[25px] flex flex-col  gap-[10px] '>
      <div className='flex w-[60%] mx-auto justify-center items-center flex-col gap-2'>
        <h1 className='font-bold text-5xl text-white'> You're all set! </h1>
        <p className='font-normal text-[18px] opacity-60 text-white
          leading-6 text-center'> Let's drop, discover and build <br/> something 
          amazing together </p> 
         </div>
        
        <div className=' flex-1 min-h-0 w-full  flex items-center justify-center overflow-hidden'>
        <img className='w-full h-full  object-contain mix-blend-screen' src={CodeDropLogo} alt='mascot logo' />
      </div>

        <div className='w-[70%] flex  mt-[auto] mx-auto flex-col items-center gap-3'>
          <Button className='bg-primary w-full h-14 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 '>Open CodeDrop</Button>

         <Button className='bg-transparent w-full  h-14 hover:bg-primary/20 hover:shadow-md hover:shadow-primary/20 '> Explore the app</Button>
        </div>

     </section>
}

export default Ready;