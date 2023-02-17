import 'bootstrap/dist/css/bootstrap.min.css'
import "./assets/css/style.css"
import "./assets/css/homepage.css"

import SideNav from './components/SideNav';
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterPlayer from './components/FooterPlayer';
import SubHeader from './components/SubHeader';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <main className="navbar-fix">
        <SubHeader />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/search/:q?" element={<SearchPage />} />
        </Routes>
        <FooterPlayer />
      </main>
    </BrowserRouter>
  );
}

export default App;
