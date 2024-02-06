// import React from "react";
import './App.css';
 import Login from './Components/Login';
import MuiAlert from "./Components/MuiAlert";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
// import Header from './Components/Header';
// import Homecss from "./Components/Homecss"
// import Blogs from "./Components/Blogs";
// import Contact from "./Components/Contact";
// import NoPage from "./Components/NoPage";

function App() {
  //const vals="welcome Anitha"
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/Home/:dataa" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter> 
     {/* <Login/> */}
     {/* <MuiAlert/> */}
     {/* <Header/> */}
    </div>
  )
}

export default App;