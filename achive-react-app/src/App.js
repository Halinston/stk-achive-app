import './App.css'; // Import your CSS file here
import DarkMode from './components/DarkMode';
import RevealElements from './components/RevealElements';
import image3dTarget from './media/3d-target_10473571.png';
import girlWorkingInRoom from './media/Room - Girl Working - Copy@3-2560x1315 (2).png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import  Navbar  from './components/navbar'
 


function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Navbar />
        <DarkMode />
        <div className="container">
          <a href="#">
            <h1 className="logo"> Goal UP</h1>
          </a>
          <ul className="nav">
            <li><a href="#about">About</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
      </nav>
      {/* Showcase */}
      <section className="section-a">
        <div className="container">
          <div>
            <h1>Achive your goals easily</h1>
            <p>
              Unlock your full potential. <br />
              We've revolutionized the way you reach your goals.
            </p>
              <a href='#' className="btn">Sign me up!</a>
          </div>
          <div>
            <img src={image3dTarget} alt="3d target" className="full" />
          </div>
          <div>
            <img src={image3dTarget} alt="3d target mobile" className="mobile" />
          </div>
        </div>
      </section>

      <section className="section-b">
        <div className="container">
          <div>
            <h4>Step 1 - set the goal.</h4>
            <p>
              Train smarter with more in-run stats. Want to compare a run to your
              last five? Just swipe left. Mark splits by selecting pause or using
              gestures, like tapping the screen or double-clicking the side
              button. And get a full post-run repost, including elevation.
            </p>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div>
            <h4>step 2 - track the progress.</h4>
            <p>
              A little support can go a long way. You can receive encouraging
              emoji from friends. And reminders triggered by your friends'shared
              activity, the current weather, or your own history give you every
              reason to run.
            </p>
            <div className="dots">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
          <div>
            <h4>step 3 - Achive the goal.</h4>
            <p>
              Run every Sunday and see how long you can keep your streak alive.
              Fuel your run with exclusive Nike+ Run Club playlists on Music.
            </p>
            <a href="#"
              ><div className="line"></div>
              Learn More</a
            >
          </div>
        </div>
      </section>

      <section className="section-c">
        <div className="container">
          <div>
            <h1>Goal UP</h1>
            <h1>Reach. Conquer.</h1>
            <h1>Win.</h1>
            <p>
              Made from the same durable, lightweight fluoroelastomer as the
              original Watch Sport Band, the Nike Sport Band reduces weight and
              imprives ventilation via row after row of compression-molded
              perforations.
            </p>
            <a href="#" className="btn">Buy now</a>
          </div>
          <img src={girlWorkingInRoom} alt="girl in room working"/>
        </div>
      </section>

      <section className="section-d">
        <div className="overlay">
          <div className="container">
            <div></div>
            <div>
              <h1>Take control of your productivity level.</h1>
              <p>
                Productivity tracking is vital for goal achievement as it keeps you focused,
                adaptable, and accountable. It helps you identify effective strategies, stay
                motivated, and celebrate progress, serving as a roadmap to success.
              </p>
              <a href="#" className="btn">Explore Features</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;