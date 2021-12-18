import { Link } from 'react-router-dom';
function BookingScreen() {


    return (
        
        <div className="table table-bordered" className="bg" style={{"height":"1000px", "padding":"10px"}}>
        

        

        <table>
  <thead>
    <tr>
        <th scope="col">Photosession Type</th>
        <th scope="col">Price</th>
        <th scope="col">Choose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row" >MATERNITY PHOTOSHOOT</th>
      <td>100000</td>
      <td>
        <div className="form-check form-switch" style={{"margin-left": "75px"}}>
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
    
    </tr>
    <tr>
        <th scope="row">NEWBORN PHOTOSHOOT</th>
      <td>10000</td>
      <td>
      <div className="form-check form-switch" style={{"margin-left": "75px"}}>
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
      
    </tr>
    <tr>
    <th scope="row">FAMILY PHOTO SHOOT</th>
    <td>10000</td>
      <td>

      <div className="form-check form-switch" style={{"margin-left": "75px"}}>
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
   
    </tr>

    <tr>
    <th scope="row">CAKESMASH PHOTOSHOOT</th>
    <td>10000</td>
      <td>
      <div className="form-check form-switch" style={{"margin-left": "75px"}}>
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
    
    </tr>
  </tbody>
</table>
<br/>
<center>
<Link to="/"><button className="review">Book</button></Link>
</center>
</div>
    )
}

export default BookingScreen;

