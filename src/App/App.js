import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header, Footer, SideNav } from "../components/common";

//IMPORTING PAGES
import ChatPage from "../pages/chatPage/chatPage";
import NotePage from "../pages/notesPage/notePage";
const App = () => {
  return (
    <Router>
      <Header />
      <Route path="/" component={ChatPage} />
      <SideNav />
      <Footer />
    </Router>
  );
};

export default App;
