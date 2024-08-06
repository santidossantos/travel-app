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

function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar navItems={navItems} />
        </nav>
      </header>

      <main>
        <HomePage />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
