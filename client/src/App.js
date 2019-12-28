import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component"
import HomePage from "./components/homepage.component"
import Footer from "./components/footer.component"
import Content from "./components/content.component"
import Blog from "./components/blog.component"
import About from "./components/about.component" 
import Contact from "./components/contact.component"

function App() {
  return (
    <Router>
        <Navbar/>
        <Route path="/" exact component={HomePage} /> 
        <Route path="/blog" component={Blog} />
        <Route path="/content" component={Content} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <br />
        <Footer />
    </Router>
  );
}

export default App;
