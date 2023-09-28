import React from "react";

function Header(){

    return(

<table>
            <tr className = "tableraw">
                <td rowspan="2"> <img src={require('../images/logo.png')} width={"200"} height={"200px"} alt={"logo"} /> </td>
                <td><center><h1 style={{ fontSize: "40px", color: "blue"  }}>Artist Portfolio and Events</h1></center></td>
                
            </tr>
            <tr>
                <td>
                  <br></br>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
        
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/add">Event</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/all">Portfolio</a>
        </li> 
      </ul>
    </div>
  </div>
</nav>



                    </td>
            </tr>
        </table>
    )
}

export default Header;