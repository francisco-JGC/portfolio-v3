import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { WorkExperience } from './components/workExperience'
import { HomePage } from './pages/home/page'
import { ProjectsPage } from './pages/projects/page'

function App() {
  return (
    <main className='chico-dev'>
      <Header />

      <div>
        <HomePage />
        <WorkExperience />
        <ProjectsPage />
      </div>

      <Footer />
    </main>
  )
}

export default App
