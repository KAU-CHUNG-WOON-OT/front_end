import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenSidebar={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <main className="flex-1 flex justify-center items-center text-center p-8">
        <h1 className="text-4xl font-bold leading-snug">
          2025<br />
          새내기배움터<br />
          로고 or 학교<br />
          마크
        </h1>
      </main>
    </div>
  );
}

export default App;