import { ChangeEventHandler, useState } from "react";

const initialTasks:Task[] = [
  {
    id: 1,
    title: "할 일 1",
    done: false,
  },
  {
    id: 2,
    title: "할 일 2",
    done: true,
  },
  {
    id: 3,
    title: "할 일 3",
    done: false,
  },];


type Task = {
  id: number;
  title: string;
  done: boolean;
};



function HomePage() {

  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState<string>("");


  const handleChangeTask: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTask(e.target.value);
  }

  const handleClickAdd = () => {
    const newTaskObj: Task = {
      id: tasks.length + 1,
      title: newTask,
      done: false,
    }

    setTasks([...tasks, newTaskObj]);
    setNewTask("");
  }

  const handleToggleTask = (id: number, done: boolean) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id){
        return {...task, done: !done}
      }
      return task;
    });

    setTasks(updatedTasks);
  }


  return (
    <div className="min-h-screen bg-white text-white p-4 flex flex-col items-center justify-center space-y-6">
        {/* To-Do 섹션 */}
        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
          <h1 className="text-lg font-bold mb-4 flex items-center justify-between">To-Do List</h1>
          {/* 할 일 목록 */}
          <div>
            <h2>Tasks</h2>
            <hr />
            <ul className="space-y-2 p-1">
              {tasks.filter((task) => !task.done).map((task) => (
                <li key={task.id} className="flex items-center space-x-1">
                  <input type="checkbox"onClick={() => {handleToggleTask(task.id, task.done)}}  />
                  <span>{task.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          {/* 할 일 추가 섹션 */}
          <div className="mt-4">
              <input onChange={handleChangeTask} type="text" className="text-black w-80 rounded p-2" placeholder="할 일을 입력하세요" value={newTask}  />
              <button onClick={handleClickAdd} className="bg-purple-600 px-4 ml-2 py-2 rounded text-white font-bold mt-4">
                Save
              </button>
          </div>
        </div>
          {/* 완료된 할 일 목록 섹션 */}
          <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
            <h1 className="text-lg font-bold mb-4 flex items-center justify-between">완료됨</h1>
            <hr />
            <ul className="space-y-2 p-1">
              {tasks.filter((task) => task.done).map((task) => (
                <li key={task.id} className="flex items-center space-x-1">
                  <input type="checkbox"onClick={() => {handleToggleTask(task.id, task.done)}} defaultChecked />
                  <span>{task.title}</span>
                </li>
              ))}
            </ul>
          </div>
    </div>
  )
}

export default HomePage