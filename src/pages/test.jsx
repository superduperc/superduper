import React, {useState} from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

const IndexPage = ({ data }, location) => {
    const [value, setValue] = useState("orange");
    let step2Right;
if (value === "orange") {
    step2Right = (<div className="child1" >
        <div className="childText" >
            <h2>Banana Runtz</h2>
            <div className="effect" >
                <h3>Effect:</h3>
                <h3>Energy, Happy, Uplifted.</h3>
            </div>
            <div className="lineage" >
                <h3>Lineage:</h3>
                <h3>Banana OG x Runtz</h3>
            </div>
            <div className="aroma" >
                <h3>Aromas:</h3>
                <h3>Banana</h3>
            </div>
            <Link to="" className="cart" > Add To Cart </Link>
        </div>
        <StaticImage src="../images/orange.png" alt="orange" className="img" />
    </div>)
} else if (value === "blue") {
    step2Right = (<div className="child1" >
        <div className="childText" >
            <h2>Banana Runtz</h2>
            <div className="effect" >
                <h3>Effect:</h3>
                <h3>Energy, Happy, Uplifted.</h3>
            </div>
            <div className="lineage" >
                <h3>Lineage:</h3>
                <h3>Banana OG x Runtz</h3>
            </div>
            <div className="aroma" >
                <h3>Aromas:</h3>
                <h3>Banana</h3>
            </div>
            <Link to="" className="cart" > Add To Cart </Link>
        </div>
        <StaticImage src="../images/red.webp" alt="red" className="img" />
    </div>)
} else if (value === "green") {
    console.log(value);
} else if (value === "red") {
    console.log(value);
} else if (value === "yellow") {
    console.log(value);
} else if (value === "purple") {
    console.log(value);
} else if (value === "aqua") {
    console.log(value);
}

  
  return (

    <div >
      <div className="index-page">

            <div className="step2">

              <div className="child" >
                <h2>Step 2: <br /> Choose Your Flavor.</h2>
                <div className="buttonContainer">
                <button className="button" onClick={() => setValue("orange")} >Ease</button>
                  <button className="button" onClick={() => setValue("yellow")} >Power</button>
                  <button className="button" onClick={() => setValue("aqua")} >Refresh</button>
                  <button className="button" onClick={() => setValue("blue")} >Free</button>
                  <button className="button" onClick={() => setValue("red")} >Energy</button>
                  <button className="button" onClick={() => setValue("green")} >Calm</button>
                  <button className="button" onClick={() => setValue("purple")} >Thrill</button>
                </div>
              </div>
            {step2Right}
            
                  

      </div>
      </div>
    </div>
  )
}

export default IndexPage
