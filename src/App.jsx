import React from "react";
import Header from "./components/Header";
import AppRouter from "./AppRouter";
import "./index.css";
import Footer from "./components/Footer";

const App = () => (
  <>
    <Header />
    <AppRouter />
    <Footer />
  </>
);

export default App;