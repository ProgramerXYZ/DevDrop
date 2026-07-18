import { useEffect, useState } from "react";
import "../Mascot.css";
import "../App.css";

const moods = [
  "happy",
  "excited",
  "thinking",
  "sleepy",
  "curious",
];

export default function Mascot() {
  const [mood, setMood] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setMood((prev) => (prev + 1) % moods.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);
  const [burst, setBurst] = useState(false);

useEffect(() => {
    const timer = setInterval(() => {

        setMood((m) => (m + 1) % moods.length);

        setBurst(true);

        setTimeout(() => setBurst(false),400);

    },3500);

    return ()=>clearInterval(timer);

},[]);

  return (
    <div className="mascot-container" 
  onMouseEnter={() => setHover(true)}
  onMouseLeave={() => setHover(false)}>

      <div className="aura"></div>

<div className="particles">
  {Array.from({ length: 20 }).map((_, i) => (
    <span
      key={i}
      className="particle"
      style={{
        "--delay": `${i * 0.2}s`,
        "--left": `${Math.random() * 90 + 5}%`,
        "--size": `${Math.random() * 8 + 4}px`,
        "--duration": `${Math.random() * 2 + 2}s`,
      }}
    />
  ))}
</div>
<div className="smoke">
    <span></span>
    <span></span>
    <span></span>
</div>

    <div className={`burst ${burst ? "show" : ""}`}></div>  
<div className="embers">
  {Array.from({ length: 6 }).map((_, i) => (
    <span
      key={i}
      className="ember"
      style={{
        "--delay": `${i * 0.8}s`,
      }}
    />
  ))}
</div>
      <div className="flame">
<div className="heat heat1"></div>
<div className="heat heat2"></div>
<div className="heat heat3"></div>
        <div className="flame-back"></div>

        <div className="flame-middle"></div>

        <div className="flame-front">
<div className="tip tip1"></div>
<div className="tip tip2"></div>
<div className="tip tip3"></div>

          <div className="face">
  <div className={`eyes ${moods[mood]}`}>
    <span className="eye left"></span>
    <span className="eye right"></span>
  </div>

  <div className={`mouth ${moods[mood]}`}></div>
</div>

          </div>
        


        </div>

      


      

      <div className="reflection"></div>
      

      <div className= {`eyes${hover ? "excited" : moods[mood]}`}></div>
    </div>
    
  );
}