import Navbar from "../../layout/Navbar"
import Button from "../../layout/Button"
import "../Authentication/Auth.css";

function Home() {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <h1>Unlock Your Future with <span style={{color:"#89369E"}}>Path-Finder!</span></h1>
          <p style={{fontSize:"16px"}}>Find Your Perfect Tech Career Match Through Psychometric Evaluation</p>
          <Button variant="primary">
            Take Assessment
          </Button>
        </div>
        <img src="..\src\assets\Hero Slide Accordion.png"></img>
      </div>
      
    </>
  )
}

export default Home
