import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import Movies from "./Movies";
import Directors from "./Directors";
import Actors from "./Actors";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="navbar">
      <NavBar />
      <Switch>
         <Route exact path="/movies"> 
              <Movies />
         </Route>
         <Route exact path="/directors">
              <Directors />
         </Route>  
         <Route exact path="/actors">  
             <Actors />
         </Route> 
         <Route  path="/"> 
            <Home />
         </Route> 
      </Switch>   
    </div>
  )
}

export default App;