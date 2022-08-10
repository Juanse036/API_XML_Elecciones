import React from 'react';
import Gotit from '../../img/Logo Gotit.png';
import home from '../../img/home.png';
import alcalde from '../../img/Alcalde.png';
import gobernador from '../../img/Gobernador.png';
import nacional from '../../img/Mapa.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const ciudades = [
        "ARAUCA",
        "ARMENIA",
        "BARRANQUILLA",
        "BOGOTA. D.C.",
        "BUCARAMANGA",
        "CALI",
        "CARTAGENA",
        "CUCUTA",
        "FLORENCIA",
        "IBAGUE",
        "INIRIDA",
        "LETICIA",
        "MANIZALES",
        "MEDELLIN",
        "MITU",
        "MOCOA",
        "MONTERIA",
        "NEIVA",
        "PASTO",
        "PEREIRA",
        "POPAYAN",
        "PUERTO CARREÑO",
        "QUIBDO",
        "RIOHACHA",
        "SAN JOSE DEL GUAVIARE",
        "SANTA MARTA",
        "SINCELEJO",
        "TUNJA",
        "VALLEDUPAR",
        "VILLAVICENCIO",
        "YOPAL"
    ]

    const departamentos = [
        "BOGOTA D.C.",
        "ARAUCA",
        "QUINDIO",
        "ATLANTICO",
        "SANTANDER",
        "VALLE",
        "BOLIVAR",
        "NORTE DE SAN",
        "CAQUETA",
        "TOLIMA",
        "GUAINIA",
        "AMAZONAS",
        "CALDAS",
        "ANTIOQUIA",
        "VAUPES",
        "PUTUMAYO",
        "CORDOBA",
        "HUILA",
        "NARIÑO",
        "RISARALDA",
        "CAUCA",
        "VICHADA",
        "CHOCO",
        "CUNDINAMARCA",
        "SAN ANDRES"
    ]

    const links = (
        <nav className="navbar sidebar-nav">   
            <ul className="navlist">
                <li>
                    <div className="logo-menu">
                    <Link to="/" ><img src={home} alt='home'/>   </Link>
                        <Link to="/" className="text-navbar">
                            Home
                        </Link>
                    </div>                    
                </li>
                <li>
                    <div className="logo-menu">
                    <Link to="/nacionales" ><img src={nacional} alt='nacional'/>   </Link>
                        <Link to="/nacionales" className="text-navbar">
                            Nacionales
                        </Link>
                    </div>                    
                </li>
                <li>
                    <div className="logo-menu">
                    <Link to="/capitales"><img src={alcalde} alt='alcalde'/></Link>
                        <Link to="/capitales" className="text-navbar">
                            Capitales
                        </Link>
                    </div> 
                    <ul className="nav-flyout">
                        {ciudades.map( ciudad => (
                            <li key={ciudad}>
                                 <Link to={`/capitales/${ciudad}`}><i className=""></i>{ciudad}</Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <div className="logo-menu">
                      <Link to="/departamentos" ><img src={gobernador} alt='gobernador' />   </Link>
                        <Link to="/departamentos" className="text-navbar">
                            Departamentos
                        </Link>
                    </div> 
                    <ul className="nav-flyout">
                        {departamentos.map( departamentos => (
                            <li key={departamentos}>
                                  <Link to={`/departamentos/${departamentos}`}><i className=""></i>{departamentos}</Link>
                            </li>
                        ))}
                    </ul>
                </li>            
            </ul>
        </nav>
    )


    return (
        <header className="header">  
            <aside className="sidebar">
                <div className="container-logo">
                    <img src={Gotit} />           
                </div>
                {links}
                
            </aside>
        </header>
    )
}

Navbar.propTypes = {

}

export default Navbar
