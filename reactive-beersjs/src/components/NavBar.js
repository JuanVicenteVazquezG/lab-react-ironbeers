import React from 'react';
import {Link} from "react-router-dom";
import { FaHome } from 'react-icons/fa'

const NavBar = () => {
  
    return (
      <div className="home-link"> <Link to="/"><FaHome/></Link></div>
    )
  }

  export default NavBar;

