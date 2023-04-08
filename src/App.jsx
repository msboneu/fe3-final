import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { Routes, Route, Navigate } from "react-router-dom";
import { ContextProvider } from "./Components/utils/global.context";

function App() {
  return (
    <ContextProvider>
      <div className="App" role="main">
        <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='/home' />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dentist/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </ContextProvider>
  );
}

export default App;