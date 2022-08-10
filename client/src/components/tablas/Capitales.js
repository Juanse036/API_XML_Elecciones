import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCapital } from '../../actions/capitales';
import Spinner from '../spinner/Spinner';

const Capitales = ({ getCapital, partidos: {partidos , loading}, ciudad} ) => {

    const [loadData, setLoadData] = useState(true)
    
    useEffect(() => {
        const getData = async () =>{            
           await getCapital(ciudad);
           setLoadData(false);
        }
        setLoadData(true)
        getData();        
    }, [ciudad])

    if (loadData) {
        return (
            <Spinner />
        )
    }

    return (
        <Fragment>
        { partidos ? (
            <section className='sectiontables'>
                <h3 className='titulotabla'>RESULTADOS CAPITALES: {partidos[0].Ciudad}</h3>
                <section className="contenedor-tabla">
                <table className="container">
                    <tbody>
                        <tr className="titulo">  
                            <th className="priority-1"><h1>ID</h1></th>  
                            <th className="priority-2"><h1>Partido</h1></th>  
                            <th className="priority-3"><h1>Votos</h1></th>  
                            <th className="priority-4"><h1>Porcentaje</h1></th>  
                            <th className="priority-5"><h1>Ciudad</h1></th>  
                            <th className="priority-6"><h1>Boletin</h1></th>  
                        </tr>  

                        {partidos.map ( partidos => (
                            <tr key={partidos.Partido.V} className="datos" >    
                                <td className="priority-1"> {partidos.Partido.V}</td>  
                                <td className="priority-2">{partidos.Nombre}</td>  
                                <td className="priority-3">{partidos.Votos.V}</td>  
                                <td className="priority-4">{partidos.Porc.V}</td>  
                                <td className="priority-5">{partidos.Ciudad}</td>  
                                <td className="priority-6">{partidos.Boletin}</td>  
                            </tr> 
                        ))}
                    </tbody>

                    
                </table>  
                </section>
            </ section>
            ): <h4>NO FOUND</h4>      
        }                
        </Fragment>   
    )
}

Capitales.propTypes = {
    getCapital: PropTypes.func.isRequired,
    partidos:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    partidos: state.partidos
})

export default connect(mapStateToProps, { getCapital })(Capitales)
