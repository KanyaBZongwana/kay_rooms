import React from "react";
 import { Link } from "react-router-dom";
function Landingscreen() {
return (
    <div className="row landing justify-content-center">

    <div className="col-md-9 my-auto text-center" style={{borderRight:'8px solid white'}}>
    <h2 style={{color: 'white' , fontSize:'120px'}}>KayRooms..</h2>
    <h2 style={{color: 'white'}}>"There is only one boss. The Guest!"</h2>

    <Link to='/home'>
    <button className="landingbtn">Get started</button>
    </Link>

    </div>

    </div>
)
}

export default Landingscreen