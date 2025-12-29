import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import emblemImg from "./assets/kau.svg";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenSidebar={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="flex-1 flex flex-col justify-center items-center text-center p-8 gap-6">
        
        <img 
          src={emblemImg} 
          alt="학교 엠블럼" 
          className="w-64 h-auto object-contain drop-shadow-md" 
        />
      </main>
    </div>
  );
}

export default App;