// Client Side
'use client'

// Imports
import { useContext, useEffect, useState } from "react";

// Imported Components
import Circle from "react-circle";

// Context
import { AppContext } from "@/app/context";

// Functional Component
export default function Timer() {
  // Variables
  const {color, status, setStatus,pomodoroTime, shortBreakTime, longBreakTime, breakSequence, setBreakSequence} = useContext(AppContext) as ContextType
  const currentTime = status === 'pomodoro' ? pomodoroTime : status === 'short break' ? shortBreakTime : status === 'long break' ? longBreakTime : pomodoroTime
  const [running, setRunning] = useState(false)
  const [minutes, setMinutes] = useState(currentTime)
  const [seconds, setSeconds] = useState(0)
  const totalSeconds = currentTime * 60;
  const remainingSeconds = minutes * 60 + seconds;
  const progress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;

  // Functions
  useEffect(() => {
    setMinutes(currentTime)
  }, [currentTime]);

  function decrease() {
    // Finished Timer
    if (minutes === 0 && seconds === 0) {
      if (status === 'pomodoro') setStatus('short break');
      if (status === 'long break') {
        setStatus('pomodoro')
        setBreakSequence(0)
      }
      if (status === 'short break') {
        if(breakSequence === 3) {
          setStatus('long break')
        } else {
          setStatus('pomodoro')
        }
        setBreakSequence(prev => prev + 1)
      }
      setRunning(false)
      return
    }
    // Finished Seconds
    if (seconds === 0) {
      setSeconds(59)
      setMinutes(prev => prev - 1)
      return
    }
    // Runnnig
    setSeconds(prev => prev - 1)
  }

  useEffect(() => {
    setSeconds(0)
    setRunning(false)
  }, [status]);

  useEffect(() => {
    if(running) {
      const interval = setInterval(() => {
        decrease()
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  // Rendering
  return (
    <section className="mt-[45px] mb-[63px] bg-bg-timer timer-shadow rounded-[50%] w-[500px] h-[500px] flex items-center justify-center relative">
      <div className="mx-auto flex flex-col gap-[19px] items-center justify-center rounded-[50%] h-[80%] w-[80%] absolute z-20">
        <h2 className="text-[100px] font-bold text-center text-[#D7E0FF]">{minutes.toString().length === 1 ? `0${minutes}` : minutes}:{seconds.toString().length === 1 ? `0${seconds}` : seconds}</h2>
        <button className={`
          ${color === '#F87070' ? 'hover:text-[#F87070]'
          :color === '#70F3F8' ? 'hover:text-[#70F3F8]'
          :color === '#D881F8' ? 'hover:text-[#D881F8]'
          : 'hover:text-[#F87070]'
         }
          tracking-[15px] text-[#D7E0FF] text-center  uppercase duration-300`} onClick={() => setRunning(!running)}>{running ? 'pause' : 'start'}</button>
      </div>
      <div className="w-[90%] h-[90%] absolute  flex items-center bg-[#181B34] rounded-[50%] justify-center">
        <Circle
          progress={progress}
          size={'100%'}
          lineWidth={'11'}
          showPercentage={false}
          progressColor={color}
          bgColor="#181B34"
          roundedStroke
        />
      </div>
    </section> 
  );
}