import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/navigation/NavBar'
import CityList from './components/cities/CityList'
import cityItems from './mocks/city-items.json'

function App() {
  return (
    <>
      <header>
        <nav>
          <NavBar />
        </nav>
      </header>

      <main>
        <section className="slider">
          <CityList cities={cityItems} />
        </section>
      </main>
    </>
  )
}

export default App
