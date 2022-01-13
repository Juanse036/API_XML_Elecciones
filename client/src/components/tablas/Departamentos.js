import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDepartamento } from '../../actions/departamentos';

const Departamentos = ({ getDepartamento, partidos: {partidos, loading}, departamento} ) => {
    //console.log(departamento);
    useEffect(() => {
        getDepartamento(departamento);
    }, [departamento])


    return (
        <Fragment>
        { partidos ? (
            <section className="contenedor-tabla">
                <table className="container">
                    <tbody>
                        <tr className="titulo">  
                            <th className="priority-1"><h1>ID</h1></th>                          
                            <th className="priority-2"><h1>Partido</h1></th>  
                            <th className="priority-3"><h1>Votos</h1></th>  
                            <th className="priority-4"><h1>Porcentaje</h1></th>  
                            <th className="priority-5"><h1>Departamento</h1></th>  
                        </tr>  

                        {partidos.map ( partidos => (
                            <tr className="datos" key={partidos.ID}>  
                                <td className="priority-1">{partidos.Partido.V}</td>                              
                                <td className="priority-2">{partidos.Nombre}</td>  
                                <td className="priority-3">{partidos.Votos.V}</td>  
                                <td className="priority-4">{partidos.Porc.V}</td>  
                                <td className="priority-5">{partidos.departamentos}</td>  
                            </tr> 
                        ))}
                    </tbody>
                </table>  
            </section>
            ): <h4>NOT FOUNDDDDDDDDDDDD</h4>      
        }                
        </Fragment>   
    )
}

Departamentos.propTypes = {
    getDepartamento: PropTypes.func.isRequired,
    partidos:PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    partidos: state.partidos
})

export default connect( mapStateToProps, { getDepartamento })(Departamentos)
