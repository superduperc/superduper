import React, {useState} from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import SEO from '../components/seo'
import NewsLetter from '../components/newsletter';
import Layout from '../layouts'
import Carausels from '../components/carausels';
// change the state of react component on click

// pass value from button to function


// conditional rendering react hooks with if




const IndexPage = ({ data }, location) => {

  const [value, setValue] = useState("orange");

  let step2Right;
  if (value === "orange") {
    step2Right = (<div className="child1" >
      <div className="childText" >
        <h2>Banana Runtz</h2>
        <div className="effect" >
          <h3>Effect:</h3>
          <p>Energy, Happy, Uplifted.</p>
        </div>
        <div className="lineage" >
          <h3>Lineage:</h3>
          <p>Banana OG x Runtz</p>
        </div>
        <div className="aroma" >
          <h3>Aromas:</h3>
          <p>Banana</p>
        </div>
        <Link to="" className="cart" > Add To Cart </Link>
      </div>
      <div className="linesDot">
        <h4>Banana Runtz</h4>
        <div className="dot"></div>
        <div className="line"></div>
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
      <StaticImage src="../images/blue.webp" alt="blue" className="img" />
    </div>)
  } else if (value === "green") {
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
      <StaticImage src="../images/blue.webp" alt="blue" className="img" />
    </div>)
  } else if (value === "red") {
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
      <StaticImage src="../images/red.webp" alt="blue" className="img" />
    </div>)
  } else if (value === "yellow") {
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
      <StaticImage src="../images/yellow.webp" alt="blue" className="img" />
    </div>)
  } else if (value === "purple") {
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
      <StaticImage src="../images/purple.webp" alt="blue" className="img" />
    </div>)
  } else if (value === "aqua") {
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
      <StaticImage src="../images/aqua.webp" alt="blue" className="img" />
    </div>)
  }

  
  return (

    <Layout location={location}>
      <div className="index-page">
        <SEO title="home" />
        <div className="hero" >
          <h1 className="hidden" >Superduper</h1>
          <div className="container" >
            <div className="divh1">
              <h2>SUPERDUPER</h2>
              <h3>Vape Pen</h3>
            </div>
            <div className="divh2">
              <h3>Ultimate User Experience</h3>
              <p>From The First To Last Puff, Immerse Yourself In The Unknown.</p>
            </div>
            <div className="buttonContainer">
              <Link to="/shop" className="button">Learn More</Link>
              <Link to="/shop" className="button" >Buy Now</Link>
            </div>

          </div>
          <StaticImage src="../images/vapeHero.png" alt="vapeHero" className="img" />
          <StaticImage src="../images/blue.png" alt="blue" className="bluesmoke" />

        </div>
        <div className="smoke" >
          <div className="container1">

            <StaticImage src="../images/video.png" alt="video" />
          </div>
          <div className="container2" >
            <StaticImage src="../images/smoke.png" alt="smoke" className="imgSmoke" />
            <div className="child">
              <h2>PUT THAT IN YOUR VAPE AND SMOKE IT.</h2>
              <p>The newest concept in electronic disposable vapes: Extracted directly from local single-source plants, we provide the highest quality strains for the true cannabis enthusiast.  Do you dare to explore?</p>
              <Link to="/" className="button" >Learn More About Us</Link>
            </div>
          </div>
        </div>
        <div className="aboutUs">
          <div className="child">
            <h2>REBOOT THE HAPPINESS NOW</h2>
            <p>Reverse Engineer your future</p>
            <StaticImage src="../images/RebootTheHappinessvideo.png" alt="RebootTheHappinessvideo" />
          </div>
          <div className="child1">
            <StaticImage src="../images/RebootTheHappinessbackground.png" alt="RebootTheHappinessbackground" className="bg" />
          </div>
        </div>
        <div className="Always">
          <div className="child">
            <h2>Always in control. Never out of bounds.</h2>
            <p>Life’s tough, and so the way you choose
              to relax shouldn’t be. It’s time to choose
              to be in control, to choose happiness,
              relaxation, exploration. It’s time to choose
              Super Duper.</p>
            <Link to="" className="button" >Learn More</Link>
          </div>
          <div className="child2">
            <StaticImage src="../images/YoungerHealthierimage_1.png" alt="YoungerHealthierimage_1YoungerHealthier1" />
            <StaticImage src="../images/YoungerHealthierimage_2.png" alt="YoungerHealthierimage_1YoungerHealthier2" />
          </div>
        </div>
        <div className="pick" >
          <div className="child">
            <h2>Pick A Vape, Any Vape</h2>
            <p>When it comes to the way you wish you explore your vape journey, choice is king. We offer you a variety of seven different options, each one uniquely designed to give you the outcome you desire. Your choice, your freedom. Power. Ease. Refresh. Free. Energy. Calm. Thrill.There’s no wrong, only Super.</p>
          </div>
          <StaticImage src="../images/7vape.png" />
        </div>
        <div className="share" >
          <div className="child">
            <h2>SHARE SuperDuper</h2>
            <p>Share Blissfulness</p>
          </div>
          <div className="child1">
            <StaticImage src="../images/SHARESuperDuperimage_1.png" className="share1" />
            <StaticImage src="../images/SHARESuperDuperimage_2.png" />
            <StaticImage src="../images/SHARESuperDuperimage_3.png" />
            <StaticImage src="../images/SHARESuperDuperimage_4.png" />

          </div>
          <div className="child2">
            <StaticImage src="../images/share.png" className="bg" />
          </div>


        </div>
        <div className="welcome" >
          <div className="child">
            <h2>Welcome to SuperDuper’s World!</h2>
            <p>Time to Take a Quick Look and Discover this Unique Place ...</p>
          </div>
          <StaticImage src="../images/Welcometobacground.png" className="bg" />
          <StaticImage src="../images/dot.png" className="dot" />

        </div>
        <div className="why" >
          <StaticImage src="../images/whychooseimage_1.png" className="whyImage" />
          <div className="child">
            <h2>WHY CHOOSE SuperDuper?</h2>
            <p>Unlike others out there, we have developed a team of research experts that have perfected the art of the vape. Using sensory tasting and adjusted mixing parameters, we have achieved where others have failed: The Golden Standard. No throat discomfort. Only quality. It’s the smoothest vape ever.</p>
          </div>

        </div>
        <div className="detail">
          {/* <div className="child" >
            <div className="left">
              <div>
                <h3>Visible Glass Reservoir</h3>
                <p>Check your remaining use at any time</p>
              </div>
              <div>
                <h3>V-shaped</h3>
                <p>Stops oil wastage with oil intake bottom.</p>
              </div>
              <div>
                <h3>Sexy, Ultra-thin Design</h3>
                <p>Take it anywhere and look good doing it.</p>
              </div>
              <div>
                <h3>Gorgeous, Matt Texture</h3>
                <p>No more fingerprints.</p>
              </div>
            </div>
            <div className="right" >
              <div>
                <h3>Mouthpiece</h3>
                <p>For direct mouth inhale, no extra buttons to activate.</p>
              </div>
              <div>
                <h3>Unique Sealing Technology</h3>
                <p>Minimizes oil leakage.</p>
              </div>
              <div>
                <h3>Food-grade PCTG</h3>
                <p>From the mouthpiece to the reservoir for your safety.</p>
              </div>
              <div>
                <h3>Medical-grade</h3>
                <p>Anti-corrosion stainless steel center post.</p>
              </div>
            </div>
          </div> */}
          <StaticImage src="../images/detail.png" alt="detail" className="img" />
          <StaticImage src="../images/purple.png" alt="detail" className="purple" />

        </div>
        <div className="immerse">
          <div className="child">
            <h2>It’s time to immerse yourself.</h2>
            <p>Get 30-50% more vapor with our sleek,
              optimized creation. Perfectly designed to incorporate curve heating and temperature control, you’ll experience a world of possibilities you never knew existed. From the first to the last puff… discover exquisite.</p>
          </div>
          <StaticImage src="../images/immerse.png" alt="immerse" className="immerseImg" />
        </div>
        <div className="costum">
          <h2>Customize Your Pen. Customize Your Lifestyle.</h2>
          <p>It’s Time To Decide Which Form Of Perfection You Desire. In Just Three Simple Steps. </p>
          <div className="child">
            <StaticImage src="../images/costum.png" alt="costum" />
            <StaticImage src="../images/costum1.png" alt="costum" />
          </div>
          <div className="step" >
            <div className="step1">
              <h2>Step 1: Choose Your Oil.</h2>
              <div className="child">

                <div>
                  <StaticImage src="../images/stepOneimage_1.png" />
                  <h3>SUPERDUPER</h3>
                  <p>Creativtity</p>
                  <p>Daily Working Elevation</p>
                  <div className="buttonContainer">
                    <Link to="" className="button">Add to Cart</Link>
                    <Link to="" className="button">Learn More</Link>
                  </div>
                </div>
                <div>
                  <StaticImage src="../images/stepOneimage_2.png" />
                  <h3>SUPERDUPER</h3>
                  <p>Sport</p>
                  <p>For Sports Enthusiasts</p>
                  <div className="buttonContainer">
                    <Link to="" className="button">Add to Cart</Link>
                    <Link to="" className="button">Learn More</Link>
                  </div>
                </div>
                <div>
                  <StaticImage src="../images/stepOneimage_3.png" />
                  <h3>SUPERDUPER</h3>
                  <p>Originality</p>
                  <p>Suitable For Beginners</p>
                  <div className="buttonContainer">
                    <Link to="" className="button">Add to Cart</Link>
                    <Link to="" className="button">Learn More</Link>
                  </div>
                </div>
                <div>
                  <StaticImage src="../images/stepOneimage_4.png" />
                  <h3>SUPERDUPER</h3>
                  <p>Originality Max</p>
                  <p>THE ULTIMATE ENJOYMENTS</p>
                  <div className="buttonContainer">
                    <Link to="" className="button">Add to Cart</Link>
                    <Link to="" className="button">Learn More</Link>
                  </div>
                </div>

              </div>
            </div>
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
            <div className="step3" >
              <h2>Step 3: Choose Your Color.</h2>
              <div className="container">
                <div>
                  <StaticImage src="../images/stepthree_1.png" alt="stepthree_1" className="img" />
                  <Link to="/" className="button" >Add to cart </Link>
                </div>
                <div>
                  <StaticImage src="../images/stepthree_2.png" alt="stepthree_2" className="img" />
                  <Link to="/" className="button" >Add to cart </Link>
                </div>
                <div>
                  <StaticImage src="../images/stepthree_3.png" alt="stepthree_3" className="img" />
                  <Link to="/" className="button" >Add to cart </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
        <NewsLetter />
      </div>
    </Layout>
  )
}

export const query = graphql` 
  query HomePageQuery {
      file(name: {eq: "folded"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default IndexPage
