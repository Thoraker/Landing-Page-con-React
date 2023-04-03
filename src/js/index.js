//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import { Nav } from "./component/navbar.jsx";
import { Jumbo } from "./component/jumbo.jsx";
import { Card } from "./component/cards.jsx";
import { data0, data1, data2, data3 } from "./component/data.jsx";
import { Footer } from "./component/foot.jsx";

let data = [data0, data1, data2, data3];
const Cartas = data.map( element => {
  return (
    <>
  <Card data = {element} />
    </>
  )
}

);
console.log(Cartas);

const Home = () => {
  return (
    <>
      <Nav />
      <Jumbo />
      <div className="row">
          <Card data = {data0} />
          <Card data = {data1} />
          <Card data = {data2} />
          <Card data = {data3} />
      </div>
      <Footer />
    </>
  );
};
//render your react application
ReactDOM.render(<Home />, document.getElementById("app"));
