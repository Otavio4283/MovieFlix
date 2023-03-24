import { React } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./NaveBar.css";
import Button from "@mui/material/Button";
import SearchAppBar from './SearchBar';

export default function NaveBar() {
  return (
    <nav>
      <div className="main_name">MovieFlix</div>
      <div class="links">
        <ul class="categories">
          <li>Ação</li>
          <li>Terror</li>
          <li>Comédia</li>
        </ul>
      </div>
      <div className="search">
          <SearchAppBar/>
      </div>
      <Button
        className="login_button"
        style={{
          borderWidth: "3px",
          borderColor: "white",
          color: "white",
          fontWeight: "bold",
          fontSize: "17px",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="outlined"
      >
        LOGIN
      </Button>
    </nav>
  );
}
