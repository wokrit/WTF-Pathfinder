import { useState } from "react";
import Quiz from "../pages/Quiz/Quiz";



function Progressbar({score, showPercentage}) {
    // const [filled, setFilled] = useState(0);

  return (
	    <>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${score}%`,
				  backgroundColor: "#E3CFE8",
				  borderRadius: "8px",
				  transition:"width 0.5s",
				  
			  }}></div>
			  {showPercentage && <span className="progressPercent">{score}%</span>}
		  </div>
		  
	    </>
  )
}


export default Progressbar
