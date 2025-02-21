import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Layout from './components/Layout'
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App