import React from 'react';
import { notas } from '../notas';
import Formulario from './Formulario';

class Main extends React.Component {
  constructor(context, props) {
    super(context, props);
    console.log(notas);
    this.state = {
      notas
    };
    this.guardarItem = this.guardarItem.bind(this);
  }

  eliminarItem = (index) => {
    console.log("Old notas=> ", this.state.notas, index);
    const newNotas = this.state.notas.filter(item => item.id !== index.toString());
    console.log("New NOTAS=> ", newNotas);
    this.setState({
      notas: newNotas
    });
  }

  guardarItem(objeto) {
    console.log("llego el objeto");
    console.log(objeto);
    this.setState({
      notas: [...this.state.notas, objeto]
    });
  }

  editItem(index) {

  }
  
  render() {
    const listaDeCards = this.state.notas.map((todo, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center" onclick={this.editItem.bind(todo.id)}>
              <h3>{todo.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
              {todo.responsable}
            </div>
            <div className="card-body">
              {todo.descripcion}
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.eliminarItem.bind(this, todo.id)}>
                Delete {todo.id}
              </button>
            </div>
          </div>
        </div>
        );

    });
    

    return(
      <div>
        {listaDeCards}
        <div className="col-md-a">
          <h3>Formulario</h3>
          <Formulario
          guardarItem={(e) => this.guardarItem(e)}></Formulario>
        </div>
      </div>
      );

      
      
  }
}

export default Main;