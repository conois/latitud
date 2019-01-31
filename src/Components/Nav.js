import React, {Component} from 'react';
import logo from './../Img/rasguño.png'
import './../App.css';

class Nav extends Component {
    constructor(){
        super()
        this.state={
            toggleMenu:true, 
            toggleDropdown: false,
        }

        this.handleToggleMenu=this.handleToggleMenu.bind(this)
        this.handleToggleDropdown=this.handleToggleDropdown.bind(this)
    }

    handleToggleMenu(){
        console.log("toggle")
        this.setState( prevState => {
            return (
                {toggleMenu: !prevState.toggleMenu}
            )
        })
    }

    handleToggleDropdown(){
        this.setState( prevState => {
            return (
                {toggleDropdown: !prevState.toggleDropdown}
            )
        })
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                    Latitud Salvaje 
                </a>
                <button class="navbar-toggler" type="button" onClick={ () =>this.handleToggleMenu()}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div style={{display: this.state.toggleMenu? 'flex' : 'none'}} class="navbar-collapse justify-content-lg-end justify-content-sm-start mr-5" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item mr-3 dropdown">
                            <a class="nav-link dropdown-toggle mr-5" href="#" onClick={()=> this.handleToggleDropdown()}>Nosotros</a>
                            <div class="dropdown-menu" style={{display: this.state.toggleDropdown ? 'block' : 'none'}}>
                                <a class="dropdown-item" href="#">Misión</a>
                                <a class="dropdown-item" href="#">Visión</a>
                                <a class="dropdown-item" href="#">Responsabilidad Social</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">Actividades</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-5" href="#">Galeria</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link mr-5" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
    
}

export default Nav 

