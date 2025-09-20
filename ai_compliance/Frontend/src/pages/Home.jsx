import React from "react";
import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Result from "../components/Result";

function Home(props) {
  return (
    <div className="mx-48  relative z-10">
      <NavBar />
      <Main />
      <Result />
    </div>
  );
}

export default Home;
