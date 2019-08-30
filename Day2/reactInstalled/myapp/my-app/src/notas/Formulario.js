import React, { Component } from 'react';

class Formulario extends Component {
  constructor(context, props) {
    super(context, props);
    this.state = {
      titulo: "",
      responsable: "",
      prioridad: "",
      descripcion: ""
    };
    console.log(this.state);
  }
  handleInput(e) {
    console.log(e.target.value, e.target.name);
    if (e.target.name == 'titulo') {
      this.setState({ titulo: e.target.value });
    }
    if (e.target.name == 'responsable') {
      this.setState({ responsable: e.target.value });
    }
    if(e.target.name == 'prioridad') {
      this.setState({ prioridad: e.target.value });
    }
    if(e.target.name == 'descripcion') {
      this.setState({ descripcion: e.target.value });
    }
    console.log(this.state);
  }
  guardarItem = (e) => {
    e.preventDefault();
    console.log("Estado para guardar", this.state);
    let newId = new Date().valueOf().toString();
    let estado = this.state;
    estado.id = newId;
    console.log(estado);
    this.props.guardarItem(estado);
  }
  render() {
    return(
      <div>
        <div className="card">
          <form className="card-body">
            <div className="form-group">
              <input
              type="text"
              name="titulo"
              className="form-control"
              placeholder="Titulo"
              value={this.state.titulo}
              onChange={(e) => this.handleInput(e)}></input>
            </div>
            <div className="form-group">
              <input 
              type="text"
              name="responsable"
              className="form-control"
              placeholder="Responsable"
              value={this.state.responsable}
              onChange={ (e) => this.handleInput(e) }/>
            </div>
            <div className="form-group">
              <select
              name="prioridad"
              className="form-control"
              value={this.state.prioridad}
              onChange={(e) => this.handleInput(e)}>
                <option value="low">Baja</option>
                <option value="medium">Media</option>
                <option value="high">Alta</option>
              </select>
            </div>
            <div className="form-group">
              <input 
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="Descripcion"
              value={this.state.descripcion}
              onChange={ (e) => this.handleInput(e) }/>
            </div>
            <button type="submit" onClick={this.guardarItem} className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>  
    );
  }
}

export default Formulario;