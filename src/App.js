import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Acerca_de from "./pages/Acerca_de";
import DashboardPage from "./pages/DashboardPage";
import { Box } from "@mui/material";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Acerca de":
        return <Acerca_de />;
      case "Dashboard":
        return <DashboardPage />;
      default:
        return <Home />;
    }
  };

  return (
    <Box>
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar onSelectPage={setCurrentPage} />
        <Box sx={{ flexGrow: 1, p: 2 }}>{renderPage()}</Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;





















/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/