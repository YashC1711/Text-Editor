import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handlelowClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleClearClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleCapitalClick = () => {
    // console.log("upper case was clicked" + text);
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text is Capitalise", "success");
  };

  const handleOnChange = (event) => {
    // console. log("onchange was clicked");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text is now in correct format !!!", "success");
  };

  const [text, setText] = useState("");
  //text = "new text"; // Wrong way to change the state
  //setText("new text"); // Correct way to change the state

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#223b7b" : "white",
        }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="container mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "light" ? "white" : " #008e9f",
              color: props.mode === "light" ? "#223b7b" : "white",
            }}
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="10 "
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handlelowClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapitalClick}
        >
          Capitalise Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpace}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container mt-3"
        style={{
          color: props.mode === "light" ? "#223b7b" : "white",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split("  ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Charecters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes taken to read the Text <br />
          POV:(Speed of reading is 300 words per Minute)
        </p>
        <div className="container">
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}
