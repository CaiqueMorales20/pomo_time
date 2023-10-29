// Client Side
'use client'

// Fonts
import { Kumbh_Sans } from 'next/font/google'
import { Roboto_Slab } from 'next/font/google'
import { Space_Mono} from 'next/font/google'
export const kumbh_sans = Kumbh_Sans({ subsets: ['latin'] })
export const roboto_slab = Roboto_Slab({ subsets: ['latin'] })
export const space_mono = Space_Mono({subsets: ['latin'], weight: ['400', '700']})

// Components
import Settings from '../Settings'
import Switch from '../Switch'
import Timer from '../Timer'
import { useContext } from 'react'
import { AppContext } from '../../context'

// Funcional Component
export default function Content() {
  // Variables
  const {fontFamily} = useContext(AppContext) as ContextType

  // Rendering
  return (
    <main className={`pt-[48px] flex flex-col items-center ${fontFamily === 'Kumbh' ? kumbh_sans.className : fontFamily === 'Roboto' ? roboto_slab.className : fontFamily === 'Space' ? space_mono.className : kumbh_sans.className }`}>
      <h1 className="text-center text-[32px] font-bold text-[#D7E0FF]">Pomo Time</h1>
      <Switch />
      <Timer />
      <Settings />
    </main>
  )
}
