// import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProgressSidebar from '../components/onboarding/ProgressSidebar';
import Welcome from '../pages/onboarding/Welcome';
import ChooseType from '../pages/onboarding/ChooseType';
import FollowCommunites from '../pages/onboarding/FollowCommunites';
import ChooseInterests from '../pages/onboarding/ChooseInterests';
import Ready from '../pages/onboarding/Ready';
import SplashScreen from '../pages/onboarding/Splash';
import { useOnboardingContext } from '../context/OnboardingContext';
import { MeshGradientBackground } from '@/components/ui/mesh-gradient';

function OnboardingLayout() {
  // const [step, setStep] = useState(0);
  const { step, direction } = useOnboardingContext();

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <MeshGradientBackground speed={1.2} backgroundColor='#030305'>
      <div className=' min-h-screen flex'>
        <ProgressSidebar currentStep={step} />
        <main className=' min-w-0 flex-1 overflow-y-auto '>
          {/* Current onboarding screen goes here */}
          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={variants}
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: {
                  type: 'string',
                  stiffness: 300,
                  damping: 30,
                },
                opacity: {
                  duration: 0.2,
                },
              }}
            >
              {step === 0 && <Welcome />}
              {step === 1 && <ChooseType />}
              {step === 2 && <FollowCommunites />}
              {step === 3 && <ChooseInterests />}
              {step === 4 && <Ready />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </MeshGradientBackground>
  );
}

export default OnboardingLayout;
