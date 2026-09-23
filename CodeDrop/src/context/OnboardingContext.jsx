import React, { useState, useContext } from "react";

const OnboardingContext = React.createContext();

function OnboardingProvider({children}){
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
   function Next(){
    setDirection(1)
    setStep(prev => prev + 1)
   }
   function Previous(){
    setDirection(-1)
    setStep(prev => prev - 1)
   }
 
 return  <OnboardingContext.Provider value={{step,Next,Previous,direction}}>
             {children}
          </OnboardingContext.Provider>
             
}
// custom hook
function useOnboardingContext() {
 return useContext(OnboardingContext);
}

export {useOnboardingContext, OnboardingProvider}