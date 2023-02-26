import React from "react";

import { useState } from 'react'
import { Tarefa } from './style'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputValue , setInputValue] = useState('')


 // const tasks = ['Comprar Sorvete' , 'Finalizar o módulo de JavaScript']

  function inputChange(event){
    setInputValue(event.target.value)
  }
  
  function buttonClick(){
    setTasks([...tasks, inputValue])

  }

  return (
    <div>
      <input placeholder="Digite a sua Tarefa" onChange={inputChange}/>
      <button onClick={buttonClick}>Adiconar Tarefa</button>

      <ul>
        {
          tasks.map( (item, index) => (
            <Item key={index}>{item}</Item>
          ))
        }
      </ul>
    </div>
  );
}
export default App;


