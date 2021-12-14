import logo from './image/logo.png';
function Hero(props) {

    return(

        <div className="px-4 py-5 my-5 text-center">
    <img src={logo} alt="logo" width="264" />
    <h1 className="display-5 fw-bold">{props.title}</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">{props.description}</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3">{props.btnLabelOne}</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">{props.btnLabelTwo}</button>
      </div>
    </div>
  </div>


    )


}

export default Hero;