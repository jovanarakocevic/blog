import React from 'react';
import { Link, withRouter } from 'react-router-dom'
function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul className="hide-on-med-and-down">
                    <div className="left"><li><Link to="/" className="left brand-logo"><img src="https://image.freepik.com/free-vector/letter-b-logo-power-red_42564-7.jpg" alt="noimage" height='60px' width='70px'></img></Link></li>
                    </div>

                    <div className="right">
                        <li><Link to="/add-post" className="waves-effect waves-light btn-large">Add Post</Link></li>
                    </div>
                </ul>


            </div>
        </nav>);
}

export default withRouter(Navbar);