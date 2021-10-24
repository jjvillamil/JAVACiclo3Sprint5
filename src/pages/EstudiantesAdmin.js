import React from "react";
import Navbar from "../components/Navbar";
import APIInvoke from "../utils/APIInvoke";
import { Link } from 'react-router-dom';

class EstudiantesAdmin extends React.Component {

    constructor(args) {
        super(args)
        this.state = {
            estudiantes: []
        }
    }

    async componentDidMount() {
        const response = await APIInvoke.invokeGET("/api/v1/estudiantes")
        this.setState({
            estudiantes: response
        })
    }

    async remove(e, estudiante) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/api/v1/estudiantes/${estudiante.id}`)
    }

    async componentDidUpdate() {
        const response = await APIInvoke.invokeGET("/api/v1/estudiantes")
        this.setState({
            estudiantes: response
        })
    }

render() {

    const arregloEstudiantes = this.state.estudiantes

    return (
        <div>
            <Navbar />
            <div className="main container">
                <div className="row">
                    <div className="col-md-12">
                        <Link to="/estudiantes-crear" className="btn btn-primary">
                            Crear
                        </Link>
                        <br />
                        <br />
                        {
                            arregloEstudiantes.length === 0 ? <div className="alert alert-warning">No existen registros de estudiantes.</div> :

                                <table className="table table-hover table-dark text-left">
                                    <thead>
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Nombres</th>
                                            <th scope="col">Apellidos</th>
                                            <th scope="col">Grado</th>
                                            <th scope="col">Correo</th>
                                            <th scope="col">Celular</th>
                                            <th scope="col">Edad</th>
                                            <th scope="col">Opciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            arregloEstudiantes.map((estudiante) =>
                                                <tr key={estudiante.id}>
                                                    <td>{estudiante.id}</td>
                                                    <td>{estudiante.nombres}</td>
                                                    <td>{estudiante.apellidos} </td>
                                                    <td>{estudiante.grado} </td>
                                                    <td>{estudiante.email}</td>
                                                    <td>{estudiante.celular}</td>
                                                    <td>{estudiante.edad}</td>
                                                    <td>
                                                        <Link to={`/estudiantes-editar/${estudiante.id}`} className="btn btn-info btn-sm" title="Editar">
                                                            <i className="fas fa-edit"></i>
                                                        </Link>
                                                        &nbsp;&nbsp;
                                                        <button className="btn btn-danger btn-sm" title="Eliminar"
                                                                onClick={
                                                                    (e) => {
                                                                    if(window.confirm('Esta seguro de eliminar el estudiante?'))
                                                                    {
                                                                        this.remove(e, estudiante)
                                                                    };
                                                                }}>
                                                            <i className="fas fa-trash"></i>
                                                        </button>

                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

}

export default EstudiantesAdmin;