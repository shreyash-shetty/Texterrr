
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React from 'react';
// import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';



function App() {


  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => { setAlert(null) }, 2500)
  }


  const updateMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Disable dark mode");
      document.body.style.backgroundColor = "grey";
      // document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");

    }
    else {
      setMode("light");
      setModeText("Enable dark mode");
      document.body.style.backgroundColor = "white";
      // document.body.style.color = "black";
      showAlert("Dark mode disabled", "success");
    }



  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="Texterrr" about="About " mode={mode} modeText={modeText} updateMode={updateMode} />
        <Alert alert={alert} />

        <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <div className="container my-3" >

          <Switch>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>

            <Route path="/about" >
              <About />
            </Route>
          </Switch>

        </div>
      </Router> */}
    </>

  );
}

export default App;
