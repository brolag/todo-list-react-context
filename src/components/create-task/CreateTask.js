import React from 'react';
import { useContext } from 'react';
import { TaskListContextProvider, TaskListContext } from '../../context/TaskListContext';

export const CreateTask = () => {
  const state = useContext(TaskListContext)
  const taskInput = React.createRef()
  const addTask = () => state.setTasks([...state.tasks, taskInput.current.value]);

  return (
      <div>
        <TaskListContextProvider>
          <input type="text" ref={taskInput} ></input>
          <button onClick={addTask}>Create task</button>
        </TaskListContextProvider>
      </div>      
  )
}

  