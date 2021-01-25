import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Videos from "./Videos/Videos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Search/SearchPage";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState([]);
  document.title = `${searchTerm ? `${searchTerm} -` : ""}  Youtube`;

  return (
    <div>
      <Router>
        <Header
          setVideos={setVideos}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <Switch>
          <Route exact path="/">
            <div className="app__page">
              <Sidebar />
              <Videos />
            </div>
          </Route>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage videos={videos} />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
