// Client Side
'use client'

// Imports
import { useRef, useState } from "react";

// Imported Components
import Image from "next/image";
import { useOnClickOutside } from "@/app/utils/useOnClickOutside";

// Functional Component
export default function Settings() {
  // Variables
  const [modalOpened, setModalOpened] = useState(false)
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

  useOnClickOutside(modalRef, () => setModalOpened(false));


  // Rendering
  return (
    <div>
      {/* Button */}
      <Image className="cursor-pointer" src="/settings.svg" width={27} height={28} alt="Abrir configurações" onClick={handleModal} />
      {/* Modal */}
      <div className={`fixed flex items-center justify-center bg-[#0a0c1c80] w-screen h-screen inset-0 duration-300 ${modalOpened ? 'z-10 opacity-100' : 'z-[-1] opacity-0'}`}>
        <div ref={modalRef} className="bg-white rounded-[25px] pt-[34px] px-[40px] pb-[59px] w-[540px] relative">
          <header className="flex items-center justify-between">
            <h2 className="text-dark text-[28px] font-bold">Settings</h2>
            <Image className="cursor-pointer" src="/close.svg" width={14} height={14} alt="Fechar configurações" onClick={(handleModal)} />
          </header>
        </div>
      </div>
    </div>
  );
}