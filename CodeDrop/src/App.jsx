import { MeshGradientBackground } from '@/components/ui/mesh-gradient';
import Navbar from './layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnboardingLayout from './layout/OnboardingLayout';
import Hero from './sections/Hero';
import Auth from './auth/Auth';
import SplashScreen from './pages/onboarding/Splash';
import './App.css';
import { OnboardingProvider } from './context/OnboardingContext';

function App() {
  return (
    <OnboardingProvider>
      <MeshGradientBackground
        speed={1.2}
        backgroundColor='#09090b'
        className='overflow-y-auto'
      >
        <Router>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/splash' element={<SplashScreen />} />
            <Route path='/onboarding' element={<OnboardingLayout />} />
          </Routes>
        </Router>
      </MeshGradientBackground>
    </OnboardingProvider>
  );
}

export default App;
