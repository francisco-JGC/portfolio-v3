import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/header'
import { Services } from './components/services'
import { WorkExperience } from './components/workExperience'
import { AboutPage } from './pages/about/page'
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
        <AboutPage />
        <Services />
      </div>

      <Footer />
    </main>
  )
}

export default App
