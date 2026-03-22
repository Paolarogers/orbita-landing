import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import EnginePage from './pages/EnginePage'
import PricingPage from './pages/PricingPage'
import './styles.css'

function Layout({ children }) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Layout><HomePage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/care"    element={<Layout><EnginePage engineKey="care" /></Layout>} />
        <Route path="/field"   element={<Layout><EnginePage engineKey="field" /></Layout>} />
        <Route path="/case"    element={<Layout><EnginePage engineKey="case" /></Layout>} />
        <Route path="/build"   element={<Layout><EnginePage engineKey="build" /></Layout>} />
        <Route path="/pet"     element={<Layout><EnginePage engineKey="pet" /></Layout>} />
        <Route path="*"        element={<Layout><HomePage /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
