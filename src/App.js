import React from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import About from "./Components/About";
import Projects from "./Components/Projects";
import { Route, Routes } from "react-router-dom";


const App=()=>{
return (
  <div>
<Header/>
<Routes>
  <Route path="/" element={<Main/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/about" element={<About/>}/>
</Routes>
  </div>

)

};
export default App;