import { FiAlertTriangle } from "react-icons/fi";

const ActionGuide = () => {
  return (
    <div 
      className="w-full rounded-[20px] p-6 shadow-[0_4px_15px_rgba(255,0,31,0.25)] text-white mb-6"
      style={{
        background: "linear-gradient(to bottom right, #FF001F 0%, rgba(255, 0, 31, 0.8) 100%)"
      }}
    >
      <div className="flex items-start gap-2 mb-4">
        <FiAlertTriangle className="text-xl flex-shrink-0 mt-0.5" />
        <h2 className="text-base font-bold leading-tight">긴급 상황 시 행동 요령</h2>
      </div>
      
      <ul className="flex flex-col gap-2 list-disc pl-5 marker:text-white/80">
        <li className="text-xs font-medium leading-snug">
          침착하게 상황을 파악하고 주변에 알립니다
        </li>
        <li className="text-xs font-medium leading-snug">
          학생회 또는 방장에게 상황을 알립니다
        </li>
      </ul>
    </div>
  );
};

export default ActionGuide;