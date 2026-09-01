import InterestChip from "@/components/onboarding/InterestChip";
import Button from '@/components/Button';
import {useOnboardingContext, OnboardingProvider} from '@/context/OnboardingContext';


function ChooseInterests() {
     const {Next,Previous} = useOnboardingContext()

  return <section className='w-full h-screen px-[40px] pt-[40px] pb-[25px] flex flex-col  gap-[10px] '>

        <h1 className='font-bold text-4xl text-white'> Follow Communities </h1>
        <div className='flex w-full justify-between '><p className='font-normal text-base text-[#71717a]
          leading-6 '>Get updates from communities you care about </p> 
         <span className='font-normal text-sm text-primary cursor-pointer transition-all duration-200
          leading-6 text-center'>Select all</span></div>
        
       <InterestChip/>

        <div className='w-full flex  justify-between mt-[auto] '>
         <Button 
         onClick={()=> Previous()}
         className='bg-transparent text-white w-full max-w-[180px] h-12 hover:bg-primary/20 hover:shadow-md hover:shadow-primary/20 '> Back</Button>

         <Button
         onClick={()=> Next()}
         className=' bg-primary w-full max-w-[200px] h-12 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 '> Next -</Button>
        </div>

     </section>
}

export default ChooseInterests;