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
      <h1 style={styles}>Pizza House</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </main>
  );
}

const hour = new Date().getHours();
const openHoue = 12;
const closeHour = 22;
const isOpen = hour >= openHoue && hour <= closeHour;

function Footer() {
  return <div className="footer">we are now {isOpen ? "Open" : "Closed"}</div>;
}

function Pizza() {
  return (
    <div>
      <img src="pizzas\spinaci.jpg" alt="Pizza spinaci" />
      <h3>Pizza Spinaci</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
