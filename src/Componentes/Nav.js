import React, { useState } from "react";
import Menu from "../Imagen/menu.png";

const Nav = () => {
    return (
            <nav>
                <div className="nav-content">
                    <h3>Your restaurants nearby...</h3>
                    <img src={Menu} alt="" style={{width:'28px', height:'25px'}} />
                </div>
            </nav>
    );
}

export default Nav;