import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Article from './components/Article';
import projectData from './Utility/projectData';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='project-container'>
        <Routes>
            <Route path='/' element={<Article project={projectData.about} />} />
            <Route path='game-of-war' element={<Article project={projectData.gameOfWar} />} />
            <Route path='calculator' element={<Article project={projectData.calculator} />} />
            <Route path='front-page' element={<Article project={projectData.frontPage} />} />
            <Route path='more' element={<Article project={'More'} />} /> 
        </Routes>
      </div>
        
    </div>
  );
}

export default App;
