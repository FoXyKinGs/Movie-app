import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/index'
import TopNavbar from './components/TopNavbar'

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <TopNavbar/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
