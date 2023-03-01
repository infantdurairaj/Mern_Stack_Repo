import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HeadNav = () => {
    const auth = localStorage.getItem("user")
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/signup")
    }
    return (
        <>
            <div>
                <header className="header">
                    <nav className="navbar">
                        <img className="logo" src="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png" alt="logo" />
                        {
                            auth ?

                                <ul className="header-nav nav-right">
                                    <li><Link to="/">Products</Link></li>
                                    <li><Link to="/profile">Add Products</Link></li>
                                    <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>

                                </ul>
                                :
                                <ul className="header-nav nav-right">
                                    <li><Link to="/signup">Sign up</Link></li>
                                    <li><Link to="/login">Login</Link></li>
                                </ul>
                        }
                    </nav>
                </header>
            </div >
        </>

    )
}

export default HeadNav;