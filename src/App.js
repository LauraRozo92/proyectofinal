import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter,Route} from 'react-router-dom';
import RegisterAuthor from './components/RegisterUser'
import Publicacion from './components/Publicacion'

class App extends Component {

  render(){
    return(
      <BrowserRouter>

      <div>
        <Navbar/>
        <main>
            <Route exact path='/' component={Home}/>
            <Route exact path='/register' component={RegisterAuthor}/>
            <Route exact path='/publicacion/:uid' component={Publicacion}/>


          </main>
      </div>
        
      </BrowserRouter>
    )
  }
}

export default App;