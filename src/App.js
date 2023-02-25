import React from "react";
import "./style.css";

import { useState } from 'react'

export default function App() {
  const [tasks, setTasks] = useState(['Finalizar o módulo de JavaScript'])
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
          tasks.map( item => (
            <li>{item}</li>
          ))
        }
      </ul>
    </div>
  );
}


