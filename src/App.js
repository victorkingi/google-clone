import React from 'react';
import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import SearchImage from "./pages/SearchImage";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/search">
                    <SearchPage />
                </Route>
                <Route path="/images">
                    <Header />
                    <SearchImage />
                </Route>
                <Route path="/shopping">
                    <SearchPage />
                </Route>
                <Route path="/maps">
                    <SearchPage />
                </Route>
                <Route path="/tools">
                    <SearchPage />
                </Route>
                <Route path="/settings">
                    <SearchPage />
                </Route>
                <Route path="/all">
                    <SearchPage />
                </Route>
                <Route path="/news">
                    <SearchPage />
                </Route>
                <Route path="/more">
                    <SearchPage />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
