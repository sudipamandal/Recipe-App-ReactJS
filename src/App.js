import React from "react";
import "./App.scss";
import Header from "./components/Header";
import RecipeLists from "./components/RecipeLists";
import Footer from "./Footer";

function App() {
  return (
    <div className="main">
      <Header />
      <RecipeLists />
      <Footer />
    </div>
  );
}

export default App;
