import { useState } from "react";

const initialTasks = [
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


function HomePage() {

  const [tasks, setTasks] = useState(initialTasks);

  return (
    <div className="min-h-screen bg-white text-white p-4 flex flex-col items-center justify-center space-y-6">
      {/* To-Do 섹션 */}
        <div className="bg-gray-800 p-6 rounded-lg w-full max-w-md">
          <h1 className="text-lg font-bold mb-4 flex items-center justify-between">To-Do List</h1>
          {/* 할 일 목록 */}
            <h2>Tasks</h2>
            <hr />
            <ul className="space-y-2 p-1">
              {initialTasks.map((task) => (
                <li key={task.id} className="flex items-center space-x-1">
                    {task.done ? (<input type="checkbox" defaultChecked />) 
                                : (<input type="checkbox" />)}
                  <span>{task.title}</span>
                </li>
              ))}
            </ul>
            <hr />
            {/* 할 일 추가 섹션 */}
            <div className="mt-4">
                <input type="text" className="text-black w-80 rounded p-2" placeholder="할 일을 입력하세요" />
                <button className="bg-purple-600 px-4 ml-2 py-2 rounded text-white font-bold mt-4">
                  Save
                </button>
            </div>
        </div>
    </div>
  )
}

export default HomePage