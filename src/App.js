import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/header';
import Content from './components/home/mainContent/content';
import StrickyFooter from './components/home/StickyFooter';
import ScrollTop from './components/home/ScrollTop';
import NewslatterPopup from './components/home/NewslatterPopup';
import Sidebar from './components/home/Sidebar';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div className="page-wrapper">
          <h1 className="d-none">hbm bazar</h1>
          <main className="main d-flex">
              <Sidebar />
              <Content />
          </main>
          </div>
          <StrickyFooter />
          <ScrollTop />
          <NewslatterPopup />
        </BrowserRouter>
    </div>
  );
}

export default App;
