


import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  

  return (
    <nav>
      <ul>
        <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
          <li>
            <p>Home</p>
          </li>
        </Link>

        <li>
          {/* <Search /> */}
        </li>

        <Link
          to="/watch-later"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <li className="watch_later">
            <p>Watchlist</p>
          </li>
        </Link>

        <li>
          <Link to='/' style={{textDecoration :'none' , color : '#fff'}}>

          <div >
            
            <img className="avatar" src="https://scontent.fnag4-2.fna.fbcdn.net/v/t1.6435-9/68615542_2382368328711243_690095807315050496_n.jpg?stp=dst-jpg_s851x315&_nc_cat=105&ccb=1-5&_nc_sid=da31f3&_nc_ohc=ZNvjyKUckm0AX86anW_&_nc_ht=scontent.fnag4-2.fna&oh=00_AT_O_BhlEeiFPLVy9NFvm17tp7dDoHTy-p73bTOfdIpfvQ&oe=6250A3CE" alt='no-profile'/>
            
          </div>

          </Link>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;