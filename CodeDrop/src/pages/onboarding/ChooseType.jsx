import TypeCard from "@/components/onboarding/TypeCard";
import Button from '@/components/Button';
import {useOnboardingContext, OnboardingProvider} from '@/context/OnboardingContext';



function ChooseType({step}) {
    const {Next,Previous} = useOnboardingContext()


  return <section className='w-full h-screen p-[40px] flex flex-col  gap-[10px]'>

        <h1 className='font-bold text-4xl text-white  '> What best describes you? </h1>
        <p className='font-normal text-base text-[#71717a] font-bold leading-6'>Choose one.You can change it anytime</p>

        <div className='w-full '>
       <TypeCard/>
        </div>


        <div className='w-full py-[15px] flex gap-3 items-center justify-end'>

         <Button
         onClick={()=> Previous()}
         className='bg-transparent text-white w-full max-w-[180px] h-12 hover:bg-primary/20 hover:shadow-md hover:shadow-primary/20 '> Back</Button>

         <Button 
         onClick={()=> Next()}
         className='bg-primary w-full max-w-[180px] text-white h-12 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 '> Next -</Button>

        </div>

     </section>
}

export default ChooseType;