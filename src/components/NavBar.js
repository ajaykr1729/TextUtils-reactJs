import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {


    const[theme,setTheme] =useState( {
        backgroundColor : "white",
        color : "black"
    });
    const changeTheme = ()=> {
   const light={backgroundColor : "white",
            color : "black"};
    const dark={backgroundColor : "black",
            color : "white"};
    if(theme.backgroundColor === "black")
      {setTheme(light)}
      else {setTheme(dark)}
    

    }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid" style={theme}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" style={theme} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
        
        </ul>
        <button className='btn btn-dark' type='button' onClick={changeTheme}>Enable Dark</button>

        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  );
}


NavBar.propTypes ={
  title : PropTypes.string.isRequired
}
NavBar.defaultProps = {
  title : "set title here"
}