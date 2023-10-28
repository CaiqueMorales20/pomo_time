// Types
type StatusType = 'pomodoro' | 'short break' | 'long break' 
type ColorType = '#F87070' | '#70F3F8' | '#D881F8'
type FontType = 'Kumbh' | 'Roboto' | 'Space'
type RunningType = true | false

type ContextType = {
  status: StatusType
  setStatus: (prev: StatusType) => void
  color: ColorType 
  setColor: (prev: ColorType) => void
  fontFamily: FontType
  setFontFamily: (prev: FontType) => void
  running: RunningType
  setRunning: (prev: RunningType) => void
  pomodoroTime: number
  setPomodoroTime: (prev: number) => void
  shortBreakTime: number
  setShortBreakTime: (prev: number) => void
  longBreakTime: number
  setLongBreakTime: (prev: number) => void
  breakSequence: number
  setBreakSequence: (prev: any) => void
}