import React from 'react';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import Departamentos from '../tablas/Departamentos';
import Capitales from '../tablas/Capitales';
import Nacionales from '../tablas/Nacional';
import Home from '../tablas/Home';

export const TablaRoutes = () => {

    const location = useLocation();    
    const depar = location.pathname.split('/');

    return (
        <section>
            <Routes>                
                <Route path="/" element={<Home/>} />
                { depar[1] === 'departamentos' && <Route path={location.pathname} element={<Departamentos departamento={depar[2]}/>} /> }
                { depar[1] === 'capitales' && <Route path={location.pathname} element={<Capitales ciudad={depar[2]}/>} /> }
                { depar[1] === 'nacionales' && <Route path={location.pathname} element={<Nacionales/>} /> }
            </Routes>
        </section>
    )
}
