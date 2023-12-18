/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { HeaderComponent } from "./components/header/header.component";
import { InputComponent } from "./components/input/input.component";
import { TaskData } from "./types";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskComponent } from "./components/task/task.component";

interface AppProps { }

const LOCAL_STORAGE_KEY = "todo:tasks";

const App: React.FC<AppProps> = () => {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  function loadSavedTask() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved) as TaskData[]);
    }
  }

  useEffect(() => {
    loadSavedTask();
  }, []);

  function setTasksAndSave(newTasks: TaskData[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (taskId === task.id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <HeaderComponent />
      <InputComponent onAddTask={addTask} />
      <TasksComponent>
        {tasks.map((data: TaskData) => {
          return <TaskComponent data={data} key={data.id} markAsDone={toggleTaskCompletedById} deleteTask={deleteTaskById} />;
        })}
      </TasksComponent>
    </>
  );
};

export default App;
