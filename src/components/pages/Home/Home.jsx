import Navbar from "../../layout/Navbar"
import Button from "../../layout/Button"
import "../Authentication/Auth.css";
import Hero from "./landing/Hero";
import Details from "./landing/Details";
import Programs from "./landing/Programs"
import Users from "./landing/Users"
import Footer from "./landing/Footer"
import styles from './Home.module.css'; 

function Home() {
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Details />
      <Programs />
      <Users />
      <div className={styles.fit}>
        <p>Embrace the journey of self-discovery with Pathfinder, and find your true calling in the vast landscape of tech.</p>
        <Button type="button" variant="primary">
            Find Your Best Fit
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default Home
