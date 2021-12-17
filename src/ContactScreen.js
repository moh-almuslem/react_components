import logo2 from "./image/logo2.png"
function ContactScreen(){

    return(

        <div className="bg" style={{"height": "1000px", "width":"1000px"}}>
        <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img src={logo2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
          </div>
          <div className="col-lg-6">
            <h1 className="display-7 fw-bold lh-1 mb-3" style={{"color": "Brown","font-size":"70px","fontFamily":"Cooper Black"}  }>Contact Us!</h1>
            <p className="lead" style={{"color": "Brown","font-size":"70px","fontFamily":"Broadway"}  } ><h2>We would love to hear from you!</h2></p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="review">Know more</button>
              <br/>
            
              <button type="button" className="review">Feedback</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
}

export default ContactScreen;