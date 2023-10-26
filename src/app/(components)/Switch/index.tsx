// Client Side
'use client'

// Imports
import { useContext } from "react"

// Context
import { AppContext } from "@/app/context"

// Functional Component
export default function Switch() {
  // Variables
  const {status, setStatus} = useContext(AppContext) as ContextType

  // Rendering
  return (
    <div className="bg-[#161932] mt-[55px] p-[7px] flex gap-2 rounded-[31.7px]">
      <button 
        className={` text-[14px] font-bold pt-[19px] pb-[15px] px-[26px]  rounded-[26.5px] duration-300
        ${status === 'pomodoro' ? 'bg-[#F87070] text-[#1E213F]' :  'bg-transparent text-[#D7E0FF] opacity-[0.4]  '}`}
        onClick={() => setStatus('pomodoro')}  
      >
        pomodoro
      </button>
      <button 
        className={` text-[14px] font-bold pt-[19px] pb-[15px] px-[26px]  rounded-[26.5px] duration-300
        ${status === 'short break' ? 'bg-[#F87070] text-[#1E213F]' :  'bg-transparent text-[#D7E0FF] opacity-[0.4]  '}`}
        onClick={() => setStatus('short break')}  
      >
        short break
      </button>
      <button 
        className={` text-[14px] font-bold pt-[19px] pb-[15px] px-[26px]  rounded-[26.5px] duration-300
        ${status === 'long break' ? 'bg-[#F87070] text-[#1E213F]' :  'bg-transparent text-[#D7E0FF] opacity-[0.4]  '}`}
        onClick={() => setStatus('long break')}  
      >
        long break
      </button>
    </div>
  );
}