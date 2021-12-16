import { Link } from 'react-router-dom';
import logo from './image/logo.png';
import t6 from "./image/t6.png"
import t2 from "./image/t2.png"
import t3 from "./image/t3.png"
import t4 from "./image/t4.png"
import t7 from "./image/t7.png"
import pict from "./image/pict.png"
import text from "./image/text.png"
// import t6 from "./image/t6.png"
function Hero(props) {

    return(
      
  
  <div className="px-4 py-5 my-5 text-center">
    <img src={logo} alt="logo" width="264" />
    <br/>
         <img src={pict} width="1200px"/>
         <br/>
    
    <h1 className="display-5 fw-bold">{props.title}</h1>
    {/* <div className="col-lg-6 mx-auto"> */}
      <img src={text} width="1080"/>
      <br/>
      <br/>
      <ul>
    <li>beauty of MATERNITY</li> 
    <li>first impressions with your NEWBORN</li>
    <li>fabulous FAMILY portraits with siblings</li>
    <li>first BIRTHDAY party with CAKE SMASH activities</li>
</ul>
<center><Link to="/photosession"><button class="button">CHOOSE YOUR TYPE OF INDIVIDUAL PHOTOSESSION</button></Link></center>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        {/* <button type="button" className="btn btn-primary btn-lg px-4 gap-3">{props.btnLabelOne}</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">{props.btnLabelTwo}</button> */}
      {/* </div> */}
    </div>
  <br/>
  
    <div className='container'>
    <h2><b>TESTIMONIALS</b></h2>
    <br/>
    <table className="review">
      <tbody><tr>
       <td><img src={t6} width="250px"/></td>
       <td><img src={t2} width="250px"/></td>
       <td><img src={t3}  width="250px"/></td>
       <td><img src={t4} width="250px"/></td>
      </tr>
      <tr>
      <td colspan="2"><center>What people say ...</center></td>
     
      <td colspan="2"><Link to="https://www.google.com/maps/place"><button className="review">find out more</button></Link></td>
      </tr>
      <tr>
      <td colspan="2"><img src={t7} /></td>
      <td colspan="2"><img src={t6}/></td>   
      </tr>
  </tbody></table>
  </div>

  </div>
  
  
  



    )


}

export default Hero;


