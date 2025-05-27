import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainIntro from "./components/MainIntro";
import MemberIntro from "./components/MemberIntro";
import ProjectList from "./components/ProjectList";
import ExternalActivity from "./components/ExternalActivity";
import SearchBar from "./components/SearchBar";
import StudyWeb from "./study/StudyWeb";
import StudyReversing from "./study/StudyReversing";
import StudyPwnable from "./study/StudyPwnable";
import ClubHistory from "./components/ClubHistory"; 
import Map from "./components/Map";
import "./App.css";

function App() {
  const [studyOpen, setStudyOpen] = React.useState(false);
  return (
    <Router>
      <div className="app-container">
        <nav className="main-nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#111', color: '#fff', padding: '0 24px', height: 48 }}>
          <div className="nav-left" style={{ fontWeight: 600, fontSize: 20 }}>Hacklipse</div>
          <div className="nav-center" style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 700 }}>Hacklipse</Link>
            <Link to="/history" style={{ color: '#fff', textDecoration: 'none' }}>연혁</Link>
            <Link to="/members" style={{ color: '#fff', textDecoration: 'none' }}>멤버 소개</Link>
            <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>프로젝트</Link>
            <div
              style={{ position: 'relative', display: 'inline-block' }}
              onMouseEnter={() => setStudyOpen(true)}
              onMouseLeave={() => setStudyOpen(false)}
            >
              <span style={{ color: '#fff', cursor: 'pointer', userSelect: 'none', height: 48, display: 'inline-flex', alignItems: 'center' }}>스터디 ▾</span>
              <div
                style={{
                  display: studyOpen ? 'block' : 'none',
                  position: 'absolute', top: 48, left: 0, background: '#222',
                  borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,0.15)', minWidth: 120, zIndex: 100
                }}
              >
                <Link to="/studies/web" style={{ display: 'block', color: '#fff', padding: '8px 16px', textDecoration: 'none' }}>웹</Link>
                <Link to="/studies/reversing" style={{ display: 'block', color: '#fff', padding: '8px 16px', textDecoration: 'none' }}>리버싱</Link>
                <Link to="/studies/pwnable" style={{ display: 'block', color: '#fff', padding: '8px 16px', textDecoration: 'none' }}>포너블</Link>
              </div>
            </div>
            <Link to="/external" style={{ color: '#fff', textDecoration: 'none' }}>대외활동</Link>
            <Link to="/map" style={{ color: '#fff', textDecoration: 'none' }}>찾아오는길</Link>
          </div>
          <div className="nav-right">
            <SearchBar />
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<MainIntro />} />
          <Route path="/history" element={<ClubHistory />} />
          <Route path="/members" element={<MemberIntro />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/studies/web" element={<StudyWeb />} />
          <Route path="/studies/reversing" element={<StudyReversing />} />
          <Route path="/studies/pwnable" element={<StudyPwnable />} />
          <Route path="/external" element={<ExternalActivity />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
