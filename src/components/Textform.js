import React, { useState } from 'react'

export default function Textform(props) {

  const handleUpClick = () => {
    // console.log ("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to 'UPPERCASE'", "success")
  }

  const handleLowClick = () => {
    // console.log ("lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to 'lowercase'", "success");
  }

  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
    // console.log(event.target.value);
  }

  const handleCLear = () => {
    if (text ===""){
      props.showAlert("Textarea is already empty", "info");
    }
    else{
     setText("");
     props.showAlert("Textarea cleared", "success");
    }
  }

  const handleCopy = () =>{
     var textContent = document.getElementById("myBox");
     
     if (textContent.value === ""){
      props.showAlert("Enter text", "info");
     }
     else{
      textContent.select();
     navigator.clipboard.writeText(textContent.value);
     props.showAlert("Text copied", "success");
     }

  }

  const [text, setText] = useState("");
  console.log(text);
  // text = "new text";   --  wrong way to change text
  // setText("new text"); --  correct way to change text

  return (
    <>
      <div className='container' style={{color: props.mode=== "dark"?"white":"black"}}>
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode=== "dark"?"white":"black",backgroundColor : props.mode=== "dark"?"grey":"white"}} id="myBox" rows="8" ></textarea>

        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-1' onClick={handleCLear}>Clear Text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy</button>
      </div>
      <div className='container my-3' style={{color: props.mode=== "dark"?"white":"black"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element) => {return element.length>0}).length} words and {text.length} characters</p>
        <p>{text === ""?"0" :0.008 * text.split(" ").length } minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>




    </>
  )
}


