
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import React, {useState}  from 'react'
import Alert from './components/Alert';



function App() {

  const [mode, setMode] = useState('light');    // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState('rainbow');

  const changeColor=(clr)=>{
    setColor(clr)
  }
  

  const showAlert = (message, type)=>{
    setAlert({
      // can give same name or different name
      msg : message,
      type : type
    })

    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }
  


  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      // document.body.style.backgroundColor = '#1a123b';
      document.body.style.backgroundColor = 'rgb(0 0 0 / 85%)';
      showAlert("Dark Mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.backgroundColor = 'rgb(191 216 227)';
      showAlert("Light Mode enabled", "success");
    }
  }

  return (
    <>
      {/* bascially we need to keep this app.js as keep as possible we use props and components */}
      {/* <Navbar></Navbar> --- can be written in this way or */}
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/>  or this way to write props */}
      
      
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} changeColor={changeColor}/>  {/* or this way to write props*/}
      
      {/* <Navbar/> */}
      {/* here it will give default props -- if the navbar props are not passed*/}

      <Alert alert = {alert}/>


      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} color={color}/>
        {/* <About/> */}
      </div>

    </>
  );
}

export default App;
