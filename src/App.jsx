import { Route, Router } from 'react-router-dom'
import './App.css'
import Footer from './layouts/Footer'
import Header from './layouts/Header'
import Nav from './layouts/Nav'

function App() {

  return (
    <>
      <Header/>
      <Nav/>
      <Router>
        <Route />
      </Router>
      <Footer/>
    </>
  )
}

export default App
