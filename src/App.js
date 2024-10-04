import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Style.css';
import LeftColumn from './components/LeftColumn';
import Download from './components/Download';
import Feedback from './components/Feedback';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Hobby from './components/Hobby';

function App() {
  return (
    <div className="container">
      <LeftColumn />
      <div className="right-column">
        <Download />
        <Feedback />
        <Education />
        <Experience />
        <Skills />
        <Hobby />
      </div>
    </div>
  );
}

export default App;