import Button from "./components/layout/Button"
import Navbar from "./components/layout/Navbar"
import Login from "./components/pages/authentication/Login"
import Home from "./components/pages/Home/Home"
import Signup from "./components/pages/authentication/Signup"
import { UserAuthContextProvider } from "./context/UserAuthContext"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    
    <>
      
      <UserAuthContextProvider>
         
        {/* <Navbar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        
           
            
          </Routes>
        </Router>
        {/* <QuestionStats /> */}
        {/* <Quiz  /> */}
      </UserAuthContextProvider>
      
      {/* <Button type='button' variant='secondary'>
        Review
      </Button> */}
    
      {/* <Login /> */}
    </>
  )
}

export default App
