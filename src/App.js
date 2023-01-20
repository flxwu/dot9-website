import AOS from "aos";
import { focusHandling } from "cruip-js-toolkit";
import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./css/style.scss";
import AboutUs from "./pages/About";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
    focusHandling("outline");
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <PrivacyPolicy />
        </Route>
        <Route path='/careers' component={() => { 
          window.location.replace('https://dot9.join.com/');
          return null;
        }}/>
        <Route path='/flyer' component={() => { 
          window.location.replace('https://docs.google.com/presentation/d/1Y9a3oEp-_eOzew4ro9tyTaAekxXSTJBsf5UkhM1hS_g/preview');
          return null;
        }}/>
        <Route path='/bucket' component={() => { 
          window.location.replace('https://docs.google.com/document/d/13rxHCHBCu7QsDuK08VOnPU5sm9MnOvTNv2sfII2zHgw/edit');
          return null;
        }}/>
      </Switch>
    </>
  );
}

export default App;
