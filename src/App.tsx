import './App.css'
import './styles/fonts.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/navigation/NavBar'
import navItems from './mocks/nav-items.json'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { TestimonialPage } from './pages/TestimonialsPage'
import { ToursPage } from './pages/ToursPage'
import { ContactPage } from './pages/ContactPage'
import { CitiesPage } from './pages/CitiesPage'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar navItems={navItems} />
        </nav>
      </header>

      <main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/testimonios" element={<TestimonialPage />} />
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/ciudades" element={<CitiesPage />} />
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </Router>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
