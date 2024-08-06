import './App.css'
import './styles/fonts.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/navigation/NavBar'
import navItems from './mocks/nav-items.json'
import { HomePage } from './pages/HomePage'
import { TestimonialPage } from './pages/TestimonialsPage'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar navItems={navItems} />
        </nav>
      </header>

      <main>
        <TestimonialPage />
      </main>
    </>
  )
}

export default App
