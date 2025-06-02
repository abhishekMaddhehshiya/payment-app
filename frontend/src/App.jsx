
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Signup} from "./pages/signup";
import {Signin} from "./pages/Signin";
import {Send} from "./pages/Send";
import {Dashboard} from "./pages/Dashboard";
import  Me  from "./pages/Me";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Me/>} />
        <Route path="/signup" element= {<Signup/>}/>
        <Route path="/signin" element= {<Signin/>}/>
        <Route path="/send" element= {<Send/>}/>
        <Route path="/dashboard" element= {<Dashboard/>}/>
      </Routes>
    
    </BrowserRouter>
      
  )
}

export default App
