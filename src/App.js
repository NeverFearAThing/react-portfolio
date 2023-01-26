import './App.scss'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './components/Projects'
import ProjectDetailPage from './components/ProjectDetail/ProjectDetailPage'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
