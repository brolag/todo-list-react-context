import React from 'react';
import { useState } from 'react';

export const TaskListContext = React.createContext({
  tasks: [],
  setTasks: () => {}
})

export const TaskListContextProvider = (props) => {

  const setTasks = (tasks) => {
    setState({...state, tasks})
  }

  const initState = {
    tasks: [],
    setTasks
  } 

  const [state, setState] = useState(initState)

  return (
    <TaskListContext.Provider value={state}>
      {props.children}
    </TaskListContext.Provider>
  )
}

