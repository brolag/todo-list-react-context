import React from 'react';
import { Fragment } from 'react';
import { TaskList } from './components/task-list/TaskList';
import { TaskListContextProvider } from './context/TaskListContext';
import { CreateTask } from './components/create-task/CreateTask'

function App() {
  return (
    <Fragment>
      <TaskListContextProvider> 
        <CreateTask />
        <TaskList />
      </TaskListContextProvider>
    </Fragment>
  );
}

export default App;
