// Functional Component
export default function Switch() {
  // Rendering
  return (
    <div className="bg-[#161932] mt-[55px] p-[7px] flex gap-2 rounded-[31.7px]">
      <button className="text-[#1E213F] text-[14px] font-bold pt-[19px] pb-[15px] px-[26px] bg-[#F87070] rounded-[26.5px]">
        pomodoro
      </button>
      <button className="text-[#D7E0FF] opacity-[0.4] text-[14px] font-bold pt-[19px] pb-[15px] px-[26px] bg-transparent rounded-[26.5px]">
        short break
      </button>
      <button className="text-[#D7E0FF] opacity-[0.4] text-[14px] font-bold pt-[19px] pb-[15px] px-[26px] bg-transparent rounded-[26.5px]">
        long break
      </button>
    </div>
  );
}