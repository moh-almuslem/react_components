import logo from './image/logo.png'
import Background from './image/bottom.png'
function LogintScreen() {

    return (
        <div className="container" style={{"margin-top": "5em", "max-width": "75em"}}>
        <body className="text-center">
    
    <main className="form-signin">
      <form >
        <img className="mb-4" src={logo} alt="" width="264" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        
        <div className="form-floating col-lg-4" >
        
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
          
        </div>
        <div className="form-floating col-lg-4">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="login btn btn-lg btn-primary" type="submit" style={{"padding": "5px", "font-size": "16px"}}>Log in</button>
       
      </form>
    </main>
    
    
        
      
    
    </body>
        </div>
    )
}

export default LogintScreen;