import './App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Main from './comps/Main';
import Header from './comps/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {


  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='' element={<Main />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
