import React, { useEffect, useState } from 'react';
import Controllers from './Controllers';
import TaskListItem from './TaskListItem';
import TaskListHeader from './TaskListHeader';

function Tasks({ tasks, removeTask, handleComplatedTaskListener, editTask }) {
  const [priority, setPriority] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleFilteredTasks = () => {
    setPriority((prev) => !prev);
  };

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    setFilteredTasks((prevTasks) => (priority ? prevTasks.filter((x) => x.priority === priority) : prevTasks));
  }, [priority]);

  return (
    <ol className="list-group list-group mb-4 p-2">
      <TaskListHeader priority={priority} handleFilteredTasks={handleFilteredTasks} />
      {filteredTasks?.map((x) => (
        <TaskListItem key={x.uuid} x={x} handleComplatedTaskListener={handleComplatedTaskListener} editTask={editTask} removeTask={removeTask} />
      ))}
    </ol>
  );
}

export default Tasks;
