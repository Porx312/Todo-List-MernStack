import { useTaskStore } from "../store/Task/Task"
import Delete from "./Delete"
import Edit from "./Edit"
import { Task } from "../interface/taskInterface"

const Item = ({ task }: { task: Task }) => {
    const toggleTask = useTaskStore(state => state.toggleTask)
 
  return (
    <li className="flex justify-between items-center">
      <div className="flex items-center">
        <input 
          type="checkbox" 
          className="mr-2" 
          checked={task.done}  
          onChange={() => toggleTask(task._id, !task.done)}
        />
        <span className={`text-black ${task.done ? 'line-through' : ''}`}>{task.title}</span>
      </div>
      <div className="flex gap-2">
        <Delete id={task._id}/>
        <Edit id={task._id} data={task.title} />
      </div>
    </li>
  )
}

export default Item
