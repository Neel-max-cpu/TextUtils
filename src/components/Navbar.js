import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';





export default function Navbar(props) {
  return (
    // light -- mode
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
      // dark -- mode
    // {/* <nav className= {`navbar navbar-expand-lg navbar-${dark} bg-dark`}> */}
    
    // <nav className={`navbar navbar-expand-lg navbar-${props.mode} ${props.mode === 'light' ? 'bg-light' : 'bg-dark'}`} style={props.mode === 'light' ? { backgroundColor: 'rgb(207, 207, 250)' } : {}}>
    // <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} >
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="/">TextUtils</a> */}
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          {/* HOME -- NOT USED */}
          {/* <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li> */}

          {/* ABOUT NOT -- USED */}
          {/* <li className="nav-item">
            <a className="nav-link" href="/">About</a>
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li> */}
        </ul>
        

        {/* change color */}
        <div class="btn-group me-2" role="group" aria-label="First group">
          <a className="navbar-brand mx-2" href="/">Change Color</a>
          {/* <a class=" mx-3" href="/">Change Color</a> */}
          <button type="button" class="btn btn-rainbow rounded mx-1 btn-sm" onClick={()=>{props.changeColor('rainbow')}}>1</button>
          <button type="button" class="btn btn-primary rounded mx-1 btn-sm" onClick={()=>{props.changeColor('primary')}}>2</button>
          <button type="button" class="btn btn-warning rounded mx-1 btn-sm" onClick={()=>{props.changeColor('warning')}}>3</button>
          <button type="button" class="btn btn-danger rounded mx-1 btn-sm" onClick={()=>{props.changeColor('danger')}}>4</button>
        </div>
        
        
        {/* darkmode switch */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" role="switch"  onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlForfor="flexSwitchCheckDefault">{props.mode==='light'?'Enable DarkMode' : 'Enable LightMode'}</label>
        </div>

        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}

      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  // changeColor:PropTypes.func
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About Text Here'
};