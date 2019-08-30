import React from 'react';
import { notas } from '../notas';

class Main extends React.Component {
  constructor(context, props) {
    super(context, props);
    console.log(notas);
  }
  
  render() {
    const listaDeCards = notas.map((todo, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.titulo}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.prioridad}
              </span>
            </div>
            <div className="card-body">
            </div>
            <div className="card-footer">
              <button className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
        );

    });
    

    return listaDeCards;
  }
}

export default Main;