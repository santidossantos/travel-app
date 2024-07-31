import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/navigation/NavBar'
import CityList from './components/cities/CityList'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <section className="slider">
          <CityList />
        </section>
      </main>
    </>
  )
}

export default App
