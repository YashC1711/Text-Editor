import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#223b7b";
      showAlert("Dark Mode Enabled", "success");
      // document.title = "TextEditor - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextEditor - ....... Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      // document.title = "TextEditor - Light Mode";
    }
  };
  const toggleRed = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "Red";
      showAlert("Dark Mode Enabled", "success");
      document.title = "TextEditor - Red Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "TextEditor - Light Mode";
    }
  };

  return (
    <>
      <Router>
        {/* <Navbar title="YashSearch" about="About_YashSearch" />
      this is a prop which can be passed as a variable and can be used in 
      another project also */}

        {/* <Navbar /> */}

        <Navbar
          title="TextEditor"
          mode={mode}
          toggleMode={toggleMode}
          toggleRed={toggleRed}
        />
        <Alert alert={alert} />
        <div className="container my-3 ">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Try TextEditor - Word Counter, Charecter Counter, Uppercase to lowercase, Lowercase to Uppercase,Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          {/* <Textform
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
          /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
