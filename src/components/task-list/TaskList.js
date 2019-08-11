import React from 'react';
import { useContext } from 'react';
import { TaskListContext } from '../../context/TaskListContext';
import { Task } from '../task/Task';

export const TaskList = () =>  {
  const state = useContext(TaskListContext)
  return <div>{ state.tasks.map((task, index) => <Task key={index} task={task} />) }</div>
}
  
 


