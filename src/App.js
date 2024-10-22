import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import PortfolioMain from './main';
import ProjectDetail from './components/ProjectDetail';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {

  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div className="App">
        <LanguageSwitcher setLanguage={setLanguage} currentLanguage={language}/>
        <Routes>
            <Route path="/" element={<Navigate to={`/${language}`} />} />
            <Route path="/:lang" element={<PortfolioMain language={language} />} />
            <Route path="/:lang/project/:id" element={<ProjectDetail language={language} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
