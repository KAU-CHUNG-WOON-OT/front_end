import { FiAlertTriangle } from "react-icons/fi";

const Emergency = () => {
  return (
    <div className="flex flex-col h-full w-full px-7 pt-6">
      
      {/* ✨ 피그마 디자인 색상 완벽 반영 
        - 시작 색상: #FF001F (투명도 100%)
        - 끝 색상: #FF001F (투명도 70% -> rgba(255, 0, 31, 0.7))
        - 방향: 왼쪽 위 -> 오른쪽 아래 (to bottom right)
      */}
      <div 
        className="w-full rounded-[20px] p-8 shadow-[0_4px_15px_rgba(255,0,31,0.25)] text-white"
        style={{
          background: "linear-gradient(to bottom right, #FF001F 0%, rgba(255, 0, 31, 0.7) 100%)"
        }}
      >
        
        {/* 타이틀 영역 */}
        <div className="flex items-start gap-3 mb-6">
          <FiAlertTriangle className="text-xl flex-shrink-0" />
          <h2 className="text-l font-bold leading-tight mt-0.5">긴급 상황 시 행동 요령</h2>
        </div>
        
        {/* 리스트 영역 */}
        <ul className="flex flex-col gap-4 list-disc pl-6 marker:text-white/90">
            <li className="text-xs font-medium leading-snug">
              침착하게 상황을 파악하고 주변에 알립니다
            </li>
            <li className="text-xs font-medium leading-snug">
              필요시 119, 112로 즉시 연락합니다
            </li>
            <li className="text-xs font-medium leading-snug">
              학생회 또는 방장에게 상황을 알립니다
            </li>
        </ul>
      </div>

    </div>
  );
};

export default Emergency;