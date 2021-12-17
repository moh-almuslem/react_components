import { Link } from 'react-router-dom';
function BookingScreen() {


    return (
        
        <div className="container" style={{"margin-top": "5em", "max-width": "75em"}}>
        

        

        <table class="table table-bordered">
  <thead>
    <tr>
        <th scope="col">Photosession Type</th>
        <th scope="col">Price</th>
        <th scope="col">Choose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">MATERNITY PHOTOSHOOT</th>
      <td>100000</td>
      <td>
        <div class="form-check form-switch" style={{"margin-left": "75px"}}>
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
    
    </tr>
    <tr>
        <th scope="row">NEWBORN PHOTOSHOOT</th>
      <td>10000</td>
      <td>
      <div class="form-check form-switch" style={{"margin-left": "75px"}}>
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
      
    </tr>
    <tr>
    <th scope="row">FAMILY PHOTO SHOOT</th>
    <td>10000</td>
      <td>

      <div class="form-check form-switch" style={{"margin-left": "75px"}}>
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
   
    </tr>

    <tr>
    <th scope="row">CAKESMASH PHOTOSHOOT</th>
    <td>10000</td>
      <td>
      <div class="form-check form-switch" style={{"margin-left": "75px"}}>
         <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault"></label>
        </div>
      </td>
    
    </tr>
  </tbody>
</table>


<Link to="/"><button className="review">Book</button></Link>
</div>
    )
}

export default BookingScreen;

