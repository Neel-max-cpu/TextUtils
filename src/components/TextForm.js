import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  
  const handleClClick = ()=>{
    let newText = '';
    setText(newText);
  }
  
  
  const handleAlClick = ()=>{
    let currentText = text;
    let newText = '';
    for(let i=0; i<currentText.length; i++){
      if(i%2 ===0){
        newText += currentText[i].toUpperCase();
      }
      else{
        newText += currentText[i].toLowerCase();
      }
    }
    setText(newText);
  }

  const handleCpClick = () =>{
    navigator.clipboard.writeText(text)
    .then(()=>{
      // using the alert function rather than the default
      // alert('Text has been copied');

      // alter only used here
      props.showAlert("Text has been copied", "success");

      console.log('Text copied to clipboard: ', text);
    })
    .catch((error) =>{
      console.log('erro in copying: ', error);
    })
  }

 
  const handleSpClick = () =>{
    if('speechSynthesis' in window){
      const utter = new SpeechSynthesisUtterance(text);

      // use the default voice
      const voice = window.speechSynthesis.getVoices();
      utter.voice = voice.find(voice=>voice.default);

      // speak the text
      window.speechSynthesis.speak(utter);
    }
    else{
      alert('Text to voice not supported in your browser');
    }

    // or directly apply ---

    // let msg = new SpeechSynthesisUtterance();
    // msg.text = text;
    // window.speechSynthesis.speak(msg);
  }
  

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  
  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

    const [text, setText] = useState(''); 
  return (
    <>
    <div className='container' style={{color : props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'#1a123b', */}
            <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'rgb(0 0 0 / 85%)',
        color : props.mode==='light'?'black':'white'}} id="myBox" rows="9"></textarea>
        </div>

        <button disabled={text.length===0} className={`btn btn-${props.color === 'rainbow'? 'danger' : `${props.color}`} mx-1 my-1`} onClick={handleUpClick}>Convert To Uppercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.color === 'rainbow'? 'warning' : `${props.color}`} mx-1 my-1`} onClick={handleLoClick}>Convert To Lowercase</button>
        <button disabled={text.length===0} className={`btn btn-${props.color === 'rainbow'? 'primary' : `${props.color}`} mx-1 my-1`} onClick={handleClClick}>Clear Text</button>
        <button disabled={text.length===0} className={`btn btn-${props.color === 'rainbow'? 'warning' : `${props.color}`} mx-1 my-1`} onClick={handleAlClick}>aLtErNaTiNg cAsE</button>
        <button disabled={text.length===0} className={`btn btn-${props.color === 'rainbow'? 'dark' : `${props.color}`} mx-1 my-1`} onClick={handleCpClick}>copy to clipboard</button>
        <button disabled={text.length===0} className={`btn btn-${props.color === 'rainbow'? 'primary' : `${props.color}`} mx-1 my-1`} onClick={handleSpClick}>Speak</button>
        <button disabled={text.length===0} className={`btn btn-${props.color === 'rainbow'? 'danger' : `${props.color}`} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        
        {/* <button className="btn btn-danger mx-1" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-warning mx-1" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear Text</button>
        <button className="btn btn-warning mx-1" onClick={handleAlClick}>aLtErNaTiNg cAsE</button>
        <button className="btn btn-dark mx-1" onClick={handleCpClick}>copy to clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleSpClick}>Speak</button>
        <button className="btn btn-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button> */}
    </div>
    
    <div className='container my-3' style={{color : props.mode==='light'?'black':'white'}}>
      <h2>Your text summary</h2>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      
      {/* here chekcing for blank spaces and if there is word actually element or not */}
      {/* <p>
      {text.split(/\s+/).filter((element) => element.trim().length > 0).length} Words and {text.length} characters
      </p> */}
      
      <p>
        {/* another way to do it here checking for blank spaces and if there is word actually element or not */}
      {text.split(" ").filter((element) => {return element.length !== 0}).length} Words and {text.length} characters 
      </p>
      <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p style={{color : props.mode==='light'?'grey':'yellow'}}>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
