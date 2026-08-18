import codedropLogo from '@/assets/logos/codedroplogo.jpg';
import { useOnboardingContext } from '@/context/OnboardingContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
  // const {Next} = useOnboardingContext()

  const navigate = useNavigate();
  const totalTime = 10;
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate('/onboarding');
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const progress = (timeLeft / totalTime) * 100;

  return (
    <section className='min-h-screen w-full text-white flex items-center justify-center overflow-hidden'>
      {/* Main content */}
      <div className='w-full max-w-[520px] px-6 flex flex-col items-center text-center'>
        {/* Logo */}
        <div className='w-[280px] h-[280px] flex items-center justify-center'>
          <img
            src={codedropLogo}
            alt='DevDrop'
            className='
              w-full
              h-full
              object-contain
              mix-blend-screen
            '
          />
        </div>

        {/* Brand */}
        <h1 className='mt-[-20px] text-4xl sm:text-5xl font-bold tracking-tight'>
          Dev
          <span className='text-primary'>Drop</span>
        </h1>

        {/* Tagline */}
        <p className='mt-2 text-sm sm:text-base text-zinc-400'>
          Drop. Discover. Build.
        </p>

        {/* Progress bar */}
        <div className='mt-10 w-[220px] sm:w-[280px]'>
          <div className='h-[10px] w-full rounded-full bg-[#17121f] overflow-hidden'>
            <div
              className={`
                h-full
                w-[${progress}%]
                rounded-full
                bg-primary
                shadow-[0_0_12px_rgba(139,92,246,0.8)]
                animate-pulse`}
            />
          </div>

          {/* Loading text */}
          <p className='mt-3 text-[11px] text-zinc-500'>
            Initializing DevDrop...
          </p>
        </div>
      </div>
    </section>
  );
}

export default SplashScreen;
