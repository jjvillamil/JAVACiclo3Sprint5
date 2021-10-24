import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import EstudiantesAdmin from './pages/EstudiantesAdmin';
import EstudiantesCrear from './pages/EstudiantesCrear';
import EstudiantesEditar from './pages/EstudiantesEditar';

class App extends React.Component {

  render() {

    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/estudiantes" exact component={EstudiantesAdmin}></Route>
          <Route path="/estudiantes-crear" exact component={EstudiantesCrear}></Route>
          <Route path="/estudiantes-editar/:estudianteId" exact component={EstudiantesEditar}></Route>
        </Switch>
      </Router>
    )
  }

}

export default App;
