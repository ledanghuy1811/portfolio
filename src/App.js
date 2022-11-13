import Header from './components/Header';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.scss'

function App() {
  return <div className="App">
    <Header />
    <Banner />
    <Skills />
    <Project /> 
    <Contact />
    <Footer />
  </div>;
}

export default App;
