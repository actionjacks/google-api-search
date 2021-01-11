import React from "react";
import "../styles/Home.css";
import Search from "../components/Search";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <img src="../chuck.jpg" alt="" />
        </div>
        <div className="home__headerRight">
          <a href="https://www.facebook.com/jaxoo.jack">
            <FacebookIcon />
          </a>
        </div>
      </div>
      <div className="home__body">
        <img src="../google1.png" alt="" />
        <div className="home__inputContainer">
          <Search hideButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
