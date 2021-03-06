import React from "react";
import Navbar from '../components/Navbar';
import APIInvoke from "../utils/APIInvoke";

class EstudiantesEditar extends React.Component {

    constructor(args){
        super(args)
        this.state={
            id: '',
            nombres: '',
            apellidos: '',
            grado: '',
            email: '',
            celular: 0,
            edad: 0,
            fechanacimiento: '',
            sexo: '',
            direccion: ''            
        }

    }

    async componentDidMount(){
        const estudianteId = this.props.match.params.estudianteId
        const response = await APIInvoke.invokeGET(`/api/v1/estudiantes/${estudianteId}`)

        this.setState({
            id: response.id,
            nombres: response.nombres,
            apellidos: response.apellidos,
            grado: response.grado,
            email: response.email,
            celular: response.celular,
            edad: response.edad,
            fechanacimiento: response.fechanacimiento,
            sexo: response.sexo,
            direccion: response.direccion
        })

    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    async edit(){
        const data = {
            id: this.state.id,
            nombres: this.state.nombres,
            apellidos: this.state.apellidos,
            grado: this.state.grado,
            email: this.state.email,
            celular: this.state.celular,
            edad: this.state.edad,
            fechanacimiento: this.state.fechanacimiento,
            sexo: this.state.sexo,
            direccion: this.state.direccion            
        }

        const response = await APIInvoke.invokePUT(`/api/v1/estudiantes`, data)

        if (response.message != null) {
            alert(response.message);
        } else {
            if (response.id !== 0) {
                this.props.history.push(`/estudiantes`)
            } else {
                console.log(response.message)
            }
        }

    }

    render() {
        return (
            <div>
                <Navbar />
                <div id="frm">
                    <div className="container">
                        <div id="frm-row" className="row justify-content-center align-items-center">
                            <div id="frm-column" className="col-md-6">
                                <div id="frm-box" className="col-md-12">
                                    <div id="frm-form" className="form">
                                        <h3 className="text-center bg-info">Editar Estudiante</h3>

                                        <div className="form-group">
                                            <label htmlFor="nombres" className="text-info">Nombres:</label><br />
                                            <input type="text" name="nombres" id="nombres" className="form-control"
                                                value={this.state.nombres}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="apellidos" className="text-info">Apellidos:</label><br />
                                            <input type="text" name="apellidos" id="apellidos" className="form-control"
                                                value={this.state.apellidos}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="grado" className="text-info">Grado:</label><br />
                                            <input type="text" name="grado" id="grado" className="form-control"
                                                value={this.state.grado}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email" className="text-info">Email:</label><br />
                                            <input type="email" name="email" id="email" className="form-control"
                                                value={this.state.email}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="celular" className="text-info">Celular:</label><br />
                                            <input type="number" name="celular" id="celular" className="form-control"
                                                value={this.state.celular}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="edad" className="text-info">Edad:</label><br />
                                            <input type="number" name="edad" id="edad" className="form-control"
                                                value={this.state.edad}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="fechanacimiento" className="text-info">Fecha Nacimiento:</label><br />
                                            <input type="date" name="fechanacimiento" id="fechanacimiento" className="form-control"
                                                value={this.state.fechanacimiento}
                                                onClick={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="sexo" className="text-info">Sexo:</label><br />
                                            <select name="sexo" className="form-select" aria-label="Default select example"
                                                value={this.state.value} onChange={this.handleChange.bind(this)}>
                                                <option value="F">Femenino</option>
                                                <option value="M">Masculino</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="direccion" className="text-info">Direcci??n:</label><br />
                                            <input type="text" name="direccion" id="direccion" className="form-control"
                                                value={this.state.direccion}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </div>

                                        <div className="form-group">
                                            <br />
                                            <button onClick={this.edit.bind(this)} className="btn btn-info btn-md">
                                                Guardar
                                            </button>
                                        </div>

                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EstudiantesEditar;