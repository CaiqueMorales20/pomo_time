// Client Side
'use client'

// Imports
import { useEffect, useState } from "react";

// Functional Component
export default function Timer() {
  // Variables
  const [running, setRunning] = useState(false)
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)

  // Functions
  function decrease() {
    if (minutes === 0 && seconds === 0) {
      setMinutes(25)
      setSeconds(0)
      setRunning(false)
      return
    }
    if (seconds === 0) {
      setSeconds(59)
      setMinutes(prev => prev - 1)
      return
    }
    setSeconds(prev => prev - 1)
  }

  useEffect(() => {
    if(running) {
      const interval = setInterval(() => {
        decrease()
      }, 1000);
      return () => clearInterval(interval);
    }
  },);


  // Rendering
  return (
    <section className="mt-[45px] bg-bg-timer timer-shadow rounded-[50%] w-[500px] h-[500px] flex items-center justify-center">
      <div className="mx-auto flex flex-col gap-[19px] items-center justify-center bg-[#181B34] rounded-[50%] h-[85%] w-[85%]">
        <h2 className="text-[100px] font-bold text-center text-[#D7E0FF]">{minutes.toString().length === 1 ? `0${minutes}` : minutes}:{seconds.toString().length === 1 ? `0${seconds}` : seconds}</h2>
        <button className="tracking-[15px] text-[#D7E0FF] text-center hover:text-[#F87070] uppercase duration-300" onClick={() => setRunning(!running)}>{running ? 'stop' : 'start'}</button>
      </div>
    </section> 
  );
}