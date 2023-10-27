// Components
import Settings from './(components)/Settings'
import Switch from './(components)/Switch'
import Timer from './(components)/Timer'

// Funcional Component
export default function Home() {
  return (
    <main className='pt-[48px] flex flex-col items-center'>
      <h1 className="text-center text-[32px] font-bold text-[#D7E0FF]">Pomo Time</h1>
      <Switch />
      <Timer />
      <Settings />
    </main>
  )
}
