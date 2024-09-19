import { useEffect } from "react"
import { useTaskStore } from "../store/Task/Task"
import Add from "./Add"
import Item from "./Item"
import { Task } from "../interface/taskInterface"

const Card = () => {
  const fetchTasks = useTaskStore(state => state.fetchTasks)
  const tasks = useTaskStore(state => state.tasks)
  
  useEffect(() => {
    fetchTasks()
  }, [tasks])

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 w-[500px]">
      <h1 className="text-xl font-bold text-black mb-2">Lista de Tareas</h1>
      <ul className="space-y-2">
        {Array.isArray(tasks) && tasks.filter(task => task._id && task._id.length !== 0) ? (
          tasks.map((task: Task) => (
            <Item key={task._id} task={task} />
          ))
        ) : (
          <p>No hay tareas disponibles</p>
        )}
      </ul>
      <Add />
    </div>
  )
}

export default Card