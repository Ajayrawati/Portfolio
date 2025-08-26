import Portfolio from './component/Port';
import Footer from './component/Footer';
import Header from './component/Header';
import Project from './component/Project';
import Skills from './component/Skills';
import './App.css'

function App() {
  

  return (
   <>
      {/* Header */}
      <Header/>



      {/* Main content */}
      <Portfolio/>

      {/* Skills */}
      <Skills/>

      {/* Project */}
      <Project/>



      {/* Footer */}
      <Footer/>
   </>
  );
}

export default App
