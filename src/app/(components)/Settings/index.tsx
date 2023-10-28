// Client Side
'use client'

// Imports
import { useContext, useRef, useState } from "react";
import { useOnClickOutside } from "@/app/utils/useOnClickOutside";

// Imported Components
import Image from "next/image";

// Context
import { AppContext } from "@/app/context";

// Functional Component
export default function Settings() {
  // Variables
  const {setPomodoroTime, setShortBreakTime, setLongBreakTime} = useContext(AppContext) as ContextType
  const [modalOpened, setModalOpened] = useState(false)
  const [localPomodoroTime, setLocalPomodoroTime] = useState<number>()
  const [localShortBreakTime, setLocalShortBreakTime] = useState<number>();
  const [localLongBreakTime, setLocalLongBreakTime] = useState<number>();
  const modalRef = useRef(null)

  // Functions
  function handleModal() {
    if (!modalOpened) {
     document.body.classList.add('modal-open')
     setModalOpened(true)  
     return
    }
    setModalOpened(false)
  }

  const handleTime = (e: React.FormEvent<HTMLInputElement>, setTime: (value: number) => void) => {
    const newValue: string = e.currentTarget.value.toString()
    if (newValue.length > 2) return
    const parsedValue: number = parseInt(newValue.replace(/\D/g, ''))
    if (parsedValue > 60) return setTime(60)
    setTime(parsedValue)
  }

  function applyFilter() {
    setPomodoroTime(localPomodoroTime)
    setShortBreakTime(localShortBreakTime)
    setLongBreakTime(localLongBreakTime)
    setLocalPomodoroTime(0)
    setLocalShortBreakTime(0)
    setLocalLongBreakTime(0)
    setModalOpened(false)
  }

  useOnClickOutside(modalRef, () => setModalOpened(false));


  // Rendering
  return (
    <div>
      {/* Button */}
      <Image className="cursor-pointer" src="/settings.svg" width={27} height={28} alt="Abrir configurações" onClick={handleModal} />
      {/* Modal */}
      <div className={`fixed flex items-center justify-center bg-[#0a0c1c80] w-screen h-screen inset-0 duration-300 ${modalOpened ? 'z-10 opacity-100' : 'z-[-1] opacity-0'}`}>
        <div ref={modalRef} className="bg-white w-[740px] rounded-[25px] pt-[34px] pb-[59px] relative">
          {/* Title */}
          <header className="flex  px-[40px] items-center justify-between">
            <h2 className="text-dark text-[28px] font-bold">Settings</h2>
            <Image className="cursor-pointer" src="/close.svg" width={14} height={14} alt="Fechar configurações" onClick={(handleModal)} />
          </header>
          <div className="bg-[#E3E1E1] h-[1px] w-full mt-[31px] mb-[26px]"></div>
          {/* Content */}
          <div className="px-[40px]">
            {/* Subtitle */}
            <h3 className="text-dark text-[13px] font-bold tracking-[5px] uppercase mb-[24px]">Time (minutes)</h3>
            <div className="flex flex-col gap-[24px]">
              {/* Inputs */}
              <div className="grid grid-cols-3 gap-[20px]">
                <div className="flex flex-col gap-[8px]">
                    <label className="text-[12px] text-dark opacity-40 font-bold">pomodoro</label>
                    <input value={localPomodoroTime} onChange={(e) => handleTime(e, setLocalPomodoroTime)} className="input-number outline-none bg-[#EFF1FA] text-[14px] text-dark font-bold h-[48px] py-[16px] px-[20px] rounded-[10px]" type="number" name="pomodoro" id="pomodoro" placeholder="0" maxLength={2}  max={60} />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label className="text-[12px] text-dark opacity-40 font-bold">short break</label>
                    <input value={localShortBreakTime} onChange={(e) => handleTime(e, setLocalShortBreakTime)} className="input-number outline-none bg-[#EFF1FA] text-[14px] text-dark font-bold h-[48px] py-[16px] px-[20px] rounded-[10px]" type="number" name="pomodoro" id="pomodoro" placeholder="0" maxLength={2}  max={60} />
                </div>
                <div className="flex flex-col gap-[8px]">
                    <label className="text-[12px] text-dark opacity-40 font-bold">long break</label>
                    <input value={localLongBreakTime} onChange={(e) => handleTime(e, setLocalLongBreakTime)} className="input-number outline-none bg-[#EFF1FA] text-[14px] text-dark font-bold h-[48px] py-[16px] px-[20px] rounded-[10px]" type="number" name="pomodoro" id="pomodoro" placeholder="0" maxLength={2}  max={60} />
                </div>
              </div>
              {/* Wrapper */}
              <div className="bg-[#E3E1E1] h-[1px] w-full"></div>
              {/* Font */}
              <div className="flex justify-between items-center">
                <h3 className="text-dark text-[13px] font-bold tracking-[5px] uppercase">Font</h3>
                <div className="flex gap-[16px]">
                  <button className="py-[13px] px-[10px] bg-dark w-[40px] h-[40px] flex items-center text-white text-[15px] font-bold rounded-[50%]">
                    Aa
                  </button>
                  <button className="py-[13px] px-[10px] bg-dark w-[40px] h-[40px] flex items-center text-white text-[15px] font-bold rounded-[50%]">
                    Aa
                  </button>
                  <button className="py-[13px] px-[10px] bg-dark w-[40px] h-[40px] flex items-center text-white text-[15px] font-bold rounded-[50%]">
                    Aa
                  </button>
                </div>
              </div>
              {/* Wrapper */}
              <div className="bg-[#E3E1E1] h-[1px] w-full"></div>
              {/* Color */}
              <div className="flex justify-between items-center">
                <h3 className="text-dark text-[13px] font-bold tracking-[5px] uppercase">Color</h3>
                <div className="flex gap-[16px]">
                  <button className="py-[13px] px-[10px] bg-[#F87070] w-[40px] h-[40px] flex items-center text-white text-[15px] font-bold rounded-[50%]"></button>
                  <button className="py-[13px] px-[10px] bg-[#70F3F8] w-[40px] h-[40px] flex items-center text-white text-[15px] font-bold rounded-[50%]"></button>
                  <button className="py-[13px] px-[10px] bg-[#D881F8] w-[40px] h-[40px] flex items-center text-white text-[15px] font-bold rounded-[50%]"></button>
                </div>
              </div>
            </div>
          </div>
          {/* Button */}
          <button className="pt-[21px] pb-[16px] px-[47px] bg-[#F87070] rounded-[26.5px] text-[16px] text-white font-bold absolute w-max translate-x-1/2 right-1/2 -bottom-[26px]" onClick={applyFilter}>Apply</button>
        </div>
      </div>
    </div>
  );
}