import './App.css';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Article from './components/Article';
import projectData from './Utility/projectData';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='project-container'>
        <Routes>
            <Route path='/portfolio-react' element={<Article project={projectData.about} />} />
            <Route path='/maxsports' element={<Article project={projectData.maxsports} />} />
            <Route path='/game-of-war' element={<Article project={projectData.gameOfWar} />} />
            <Route path='/calculator' element={<Article project={projectData.calculator} />} />
            <Route path='/front-page' element={<Article project={projectData.frontPage} />} />
        </Routes>
      </div>
      <Footer />    
    </div>
  );
}

export default App;
