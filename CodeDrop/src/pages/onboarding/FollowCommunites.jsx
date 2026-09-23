import CommunityCard from "@/components/onboarding/CommunityCard";
import Button from '@/components/Button';
import {useOnboardingContext, OnboardingProvider} from '@/context/OnboardingContext';



function FollowCommunites() {
     const {Next,Previous} = useOnboardingContext()


  return <section className='w-full h-screen px-[40px] pt-[40px] pb-[25px] flex flex-col  gap-[10px] '>

        <h1 className='font-bold text-4xl text-white  text-center'> What interest you? </h1>
        <p className='font-normal text-base text-[#71717a]
         font-bold leading-6 text-center'>Select topics you want to explore</p>

        <div className='w-full h-[60%] min-h-[60%]'>
       <CommunityCard/>
        </div>


        <div className='w-full flex  justify-between mt-[auto] '>
         <Button 
         onClick={()=> Previous()}
         className='bg-transparent text-white w-full max-w-[180px] h-12 hover:bg-primary/20 hover:shadow-md hover:shadow-primary/20 '> Back</Button>

         <Button 
         onClick={()=> Next()}
         className='bg-primary w-full max-w-[180px] h-12 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 '> Next -</Button>
        </div>

     </section>
}

export default FollowCommunites;