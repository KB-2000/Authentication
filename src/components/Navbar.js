 import React from "react";
 
 

 const Navbar = () => {
    return (
        <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a href="/" className="navbar-brand" ><i class="fa-solid fa-cubes"></i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page" >Home</a>
                </li>
                {/* <li className="nav-item">
                <a href="/about" className="nav-link" >About</a>
                </li> */}


                {/* <li className="nav-item">
                <a href="/contact" className="nav-link" >Contact</a>
                </li> */}
                <li className="nav-item">
                <a href="/login" className="nav-link" >Login</a>
                </li>
                <li className="nav-item">
                <a href="/signup" className="nav-link" >Registration</a>
                </li>
                <li className="nav-item">
                <a href="/logout" className="nav-link" >Logout</a>
                </li>
            
                
            </ul>
            </div>
        </div>
</nav>
        </>

    )
 }

 export default Navbar