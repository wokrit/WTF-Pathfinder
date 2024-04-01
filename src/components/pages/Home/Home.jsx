import Navbar from "../../layout/Navbar"
import Button from "../../layout/Button"
import "../authentication/Auth.css";

function Home() {
  

  return (
    <>
      <Navbar />
      <div className="container">
        <div>
          <h1>Unveil Your Ideal Tech Career Path with Path-Finder</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor senectus id bibendum vitae condimentum gravida morbi vitae. Rhoncus diam sed molestie et, iaculis lorem a. </p>
          <Button variant="primary">
            Take Assessment
          </Button>
        </div>
        <img src="..\src\assets\Group 121.png"></img>
      </div>
      
    </>
  )
}

export default Home
