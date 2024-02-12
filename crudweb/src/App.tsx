import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <form>
        <div className='container'>
          <div className='box'>
            <div>
              <label>Usuário:</label>
              <input type="text"></input>
            </div>
            <div>
              <label>Senha...:</label>
              <input type="password"></input>
            </div><br></br>
            <div>
              <button type="button">Cadastrar</button>
              <button type="submit">Entrar</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
