
import './App.css';
import Main from './Pages/Main';
import Footer from './conponent/Footer';
import NavBar from './conponent/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPage from './Pages/PrivacyPage';
import TermAndAgreementPage from './Pages/TermAndAgreementPage';
import NoPage from './Pages/NoPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={[<NavBar/>,<Footer/>]} >
              <Route index element={<Main/>}/>
              <Route path='privacy' element={<PrivacyPage/>}/>
              <Route path='terms' element={<TermAndAgreementPage/>}/>
              <Route path="*" element={<NoPage/>} />
            </Route>
 
        </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
