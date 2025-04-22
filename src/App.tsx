import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { HomePage } from './pages/home/page'

function App() {
  return (
    <main className='chico-dev'>
      <Header />

      <div>
        <HomePage />
      </div>

      <Footer />
    </main>
  )
}

export default App
