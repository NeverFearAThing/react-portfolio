import './App.scss';
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
