import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="Home">
            <h1 className="title">Three.js tutorial</h1>
            <div className="nav">
                <Link to="/Cube">Cube</Link>
                <Link to="/Text">Text</Link>
            </div>
        </div>
    )
}

export default Home;