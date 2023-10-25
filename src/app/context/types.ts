// Types
interface ContextType {
  status: 'timer' | 'short break' | 'long break'
  color: 'pink' | 'blue' | 'lilac' 
  fontFamily: 'kumbh' | 'Roboto' | 'Space'
  running: true | false
  pomodoroTime: number
  shortBreakTime: number
  longBreakTime: number
}