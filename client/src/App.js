import Landing from "./pages/Landing";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LoginRegister from "./pages/LoginRegister";


function App() {
  return (
    <div className="App">

    <BrowserRouter>

      <Navbar/>
      
        <Routes>
            <Route path = "/" element = {<Landing/>}/>
            <Route path = "/LoginRegister" element = {<LoginRegister/>}/>

        </Routes>
      <Footer/>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
