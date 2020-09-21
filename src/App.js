import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./DataFetching/request";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      {requests.map(({ title, url }) => {
        return <Row title={title} fetchUrl={url} key={title} />;
      })}
    </div>
  );
}

export default App;
