import './App.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import NavBar from './components/NavBar'
import SlidesShow from './components/SlidesShow'

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <section className="slider">
          <SlidesShow />
        </section>
      </main>
    </>
  )
}

export default App
