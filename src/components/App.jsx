import { useState } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
