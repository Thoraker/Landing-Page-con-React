//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import {Nav} from "./component/navbar.jsx";
import {Jumbo} from "./component/jumbo.jsx";
// import {Cards} from "./component/cards.jsx"

const Home = () => {
    return (
        <>
        <Nav />  
        <Jumbo />
        </>
    )
}
//render your react application
ReactDOM.render(<Home />, document.getElementById("app"));
