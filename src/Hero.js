import { Link } from 'react-router-dom';
import logo from './image/logo.png';
import t6 from "./image/t6.png"
import t2 from "./image/t2.png"
import t3 from "./image/t3.png"
import t4 from "./image/t4.png"
import t7 from "./image/t7.png"
import pict from "./image/pict.png"
import text from "./image/text.png"


function reviews(){
  window.location.href = "https://www.google.com/maps/place/AstroLabs+Dubai/@25.0768995,55.1450755,17z/data=!4m7!3m6!1s0x3e5f6cad97a03f91:0x9cee6adf07ebed17!8m2!3d25.076899!4d55.1472643!9m1!1b1?hl=en-SA";
}

function Hero(props) {

  return (

    <div className='bg'>
      <div className="px-4 py-5 my-5 text-center">
        <img src={logo} alt="logo" width="" />
        <br />
        <img src={pict} style={{ maxWidth: "1200px", width: "100%" }}
        />
        <br />

        <h1 className="display-5 fw-bold">{props.title}</h1>
        <img src={text} width="1080" />
        <br />
        <br />
        <ul>
          <li>beauty of MATERNITY</li>
          <li>first impressions with your NEWBORN</li>
          <li>fabulous FAMILY portraits with siblings</li>
          <li>first BIRTHDAY party with CAKE SMASH activities</li>
        </ul>
        <center><Link to="/photosession"><button class="button">CHOOSE YOUR TYPE OF INDIVIDUAL PHOTOSESSION</button></Link></center>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        </div>
        <br />

        <div className='container'>
          <h2><b>TESTIMONIALS</b></h2>
          <br />
          <table className="review">
            <tbody><tr>
              <td><img src={t6} width="250px" /></td>
              <td><img src={t2} width="250px" /></td>
              <td><img src={t3} width="250px" /></td>
              <td><img src={t4} width="250px" /></td>
            </tr>
              <tr>
                <td colspan="2"><center>What people say ...</center></td>

                <td colspan="2">
                  <button onClick={reviews} className="review">find out more</button></td>
              </tr>
              <tr>
                <td colspan="2"><img src={t7} /></td>
                <td colspan="2"><img src={t6} /></td>
              </tr>
            </tbody></table>
        </div>

      </div>


    </div>



  )


}

export default Hero;


