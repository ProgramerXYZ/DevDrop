import Button from '@/components/Button';
import CodeDropLogo from '@/assets/logos/codedroplogo.jpg';
import {useOnboardingContext} from '@/context/OnboardingContext';


function Welcome() {
    const {Next} = useOnboardingContext()

  return (
    <section className='w-full max-h-screen 
     flex flex-col px-[50px] pl-[70px] py-[20px] gap-[15px] text-white overflow-y-auto'>

      <h2 className='text-[#71717a] text-[40px] font-bold'>Welcome to</h2>

      <h1 className='text-4xl font-bold'>Code <span className='text-primary'>Drop</span> </h1>

      <h4 className='font-bold leading-6 text-sm  max-w-md text-zinc-400 md:text-base'>
        A place for developer to drop, discover 
         and build amazing things
        together
      </h4>

      <div className='border flex-1 min-h-0 min-w-0  flex items-center justify-center overflow-hidden'>
        <img className='w-full h-full  object-contain mix-blend-screen' src={CodeDropLogo} alt='' />
      </div>


      <Button onClick={()=> {Next()}}
      className=' bg-primary w-full max-w-[180px] h-14 hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 ml-[auto] gap-2'>
        Let's go 
        {/* <span>--</span> */}
      </Button>

    </section>
  );
}

export default Welcome;
