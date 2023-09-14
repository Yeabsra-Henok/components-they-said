import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  const styles = {};
  return (
    <header className="header">
      <h1 style={styles}>Pizza House 1 </h1>
    </header>
  );
}
//check to see if rebase workrs lol
//another commentin
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas\spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Toamato, mushrooms"
        price={34}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

const hour = new Date().getHours();
const openHoue = 12;
const closeHour = 22;
const isOpen = hour >= openHoue && hour <= closeHour;

function Footer() {
  return <div className="footer">we are now {isOpen ? "Open" : "Closed"}</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
