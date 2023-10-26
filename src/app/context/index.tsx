// Cliente Side
'use client'

// Imports
import { useState, createContext, ReactNode, useEffect } from "react";

// Creating Context
export const AppContext = createContext<ContextType | null>(null)

// Types
type AppContextComponentType ={
  children: ReactNode
}

// Functional Component
export default function AppContextComponent({children}: AppContextComponentType) {
  // Variables
  const [status, setStatus] = useState<StatusType>('pomodoro')
  const [color, setColor] = useState<ColorType>('pink')
  const [fontFamily, setFontFamily] = useState<FontType>('kumbh')
  const [running, setRunning] = useState(false)
  const [pomodoroTime, setPomodoroTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)
  const [breakSequence, setBreakSequence] = useState(0)

  // Rendering
  return(
    <AppContext.Provider value={{status, setStatus, color, setColor, fontFamily, setFontFamily, running, setRunning, pomodoroTime, setPomodoroTime, shortBreakTime, setShortBreakTime, longBreakTime ,setLongBreakTime, breakSequence, setBreakSequence}}>
      {children}
    </AppContext.Provider>
  )
}