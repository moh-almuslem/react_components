import about from "./image/photo1.png"
function AboutScreen(){

    return(

        <div className="bg" style={{"height": "1000px", "width":"890px"}}>
            
            <div className="container">
        <h1 className="text-center">ABOUT US</h1>
        <br/>
        <div className="row text-center">
            <div className="col-md-6" >
                <img src={about} />
                
            </div>
            <div className="col-md-6">
                <h6>Photography Group are
                    passionate about photography, digital
                    marketing and creating new business
                    projects. We are glad to say that
                    we are professional newborn
                    photographers as it involves not only
                    photography but connecting with these
                    miracles of life, soothing a baby as well.
                </h6>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-md-6" >
                <h4>OUR SERVICES:</h4>
                
            </div>
            <div className="col-md-5">
                <h6>
                   <li>Individual photoshoot</li>
                   <li>Commercial photoshoot</li>
                   <li>School photography</li>
                   <li>Sublimation service</li>
                   <li>Event balloon's service</li>
                   <li>Photo printing</li>

                </h6>
            </div>
        </div>
        <br/>
        <h3>FAQ</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       <h6> Can I choose the outfits and colors?</h6>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> <h6>Yes, certainly. You are going to choose the colors, outfits, I
will also inspire you and share my suggestions.</h6>
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <h6>Ready to book your reservation
and do downpayment?
</h6>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><h6>You can do your downpayment with bank transfer which I will
share with you once you inform me.</h6></div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <h6>Do you have home service?</h6>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"><h6>Home service is very exclusive, limited to Sola and Gloria
packages only and pricing is significantly different.
</h6></div>
    
    </div>
    
  </div>
</div>
    </div>
       </div>
    )
}

export default AboutScreen;

