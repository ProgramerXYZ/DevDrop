import { MeshGradientBackground } from "@/components/ui/mesh-gradient";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import "./App.css";


function App() {

  return (
    <MeshGradientBackground speed={1.2} backgroundColor="#09090b" className="overflow-y-auto">
      <Navbar/>
      <Hero/>
    </MeshGradientBackground>
  );
}

export default App;
