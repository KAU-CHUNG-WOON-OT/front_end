import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom' // 라우터 관련 import
import './index.css'

import Layout from './components/Layout.tsx'
import App from './App.tsx' // 홈 (메인 화면)

// 새로 만든 페이지들 불러오기
import Notice from './pages/Notice.tsx'
import TimeTable from './pages/TimeTable.tsx'
import Club from './pages/Club.tsx'
import Resort from './pages/Resort.tsx'
import Emergency from './pages/Emergency.tsx'
import Makers from './pages/Makers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 1. BrowserRouter로 앱 전체를 감쌉니다 */}
    <BrowserRouter>
      {/* 2. Layout은 모든 페이지 공통이므로 바깥에 둡니다 */}
      <Layout>
        {/* 3. Routes 안에 바뀌는 페이지들을 정의합니다 */}
        <Routes>
          <Route path="/" element={<App />} />            {/* 홈 */}
          <Route path="/notice" element={<Notice />} />   {/* 공지사항 */}
          <Route path="/timetable" element={<TimeTable />} /> {/* 타임테이블 */}
          <Route path="/club" element={<Club />} />       {/* 동아리 정보 */}
          <Route path="/resort" element={<Resort />} />   {/* 리조트 정보 */}
          <Route path="/emergency" element={<Emergency />} /> {/* 긴급연락 */}
          <Route path="/makers" element={<Makers />} />   {/* 만든이 */}
        </Routes>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
)