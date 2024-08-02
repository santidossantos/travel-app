import './App.css'
import './styles/fonts.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/navigation/NavBar'
import CityList from './components/cities/CityList'
import cityItems from './mocks/city-items.json'
import navItems from './mocks/nav-items.json'
import { VideoBanner } from './components/home/VideoBanner'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar navItems={navItems} />
        </nav>
      </header>

      <main>
        <section className="video-banner">
          <VideoBanner />
        </section>

        <section className="slider">
          <CityList cities={cityItems} />
        </section>
      </main>
    </>
  )
}

export default App
