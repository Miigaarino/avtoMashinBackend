import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import MedeelluudList from "./components/medeelluud-list.component";
import EditMedeelel from "./components/edit-medeelel.component";
import CreateMedeelel from "./components/create-medeelel.component";
import CreateCar from "./components/create-car.component";
import Footer from "./components/footer.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Route path="/" exact component={MedeelluudList} />
        <Route path="/edit/:id" component={EditMedeelel} />
        <Route path="/create" component={CreateMedeelel} />
        <Route path="/car" component={CreateCar} />
      </div>
    </Router>
  );
}

export default App;
