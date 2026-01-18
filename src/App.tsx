import emblemImg from "./assets/kau.svg"; // kau.svg로 되어있는지 확인하세요!

function App() {
  return (
    <main className="flex-1 flex flex-col justify-center items-center text-center p-8 gap-6">
      {/* 텍스트나 다른 내용은 여기에 추가하면 됩니다 */}
      <img 
        src={emblemImg} 
        alt="학교 엠블럼" 
        className="w-64 h-auto object-contain drop-shadow-md" 
      />
    </main>
  );
}

export default App;