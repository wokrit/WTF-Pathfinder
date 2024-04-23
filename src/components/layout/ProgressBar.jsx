import { useState } from "react";
import Quiz from "../pages/Quiz/Quiz";



function Progressbar({score, showPercentage, backgroundImage }) {
    // const [filled, setFilled] = useState(0);


  return (
	    <>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${score}%`,
				  backgroundColor: "#E3CFE8",
				  backgroundImage: backgroundImage ? "linear-gradient(90deg, rgba(166, 148, 134, 0.50) 0%, rgba(207, 185, 167, 0.50) 24%, rgba(252, 238, 228, 0.50) 46%, rgba(161, 94, 178, 0.50) 67%, rgba(137, 54, 158, 0.80) 100%)" : "none" ,
				  transition:"width 0.5s",
				  
			  }}></div>
			  {showPercentage && <span className="progressPercent">{score}%</span>}
			  
		  </div>
		  
		  
	    </>
  )
}


export default Progressbar
