import { create } from 'zustand'
import { createTask, deleteTask, editTask, getTasks, toggleTask } from '../../services/api'
import { Task } from '../../interface/taskInterface'

interface TaskState {
    tasks: Task[]
    isLoading: boolean
    error: string | null
    fetchTasks: () => Promise<void>
    deleteTask: (id: string) => Promise<void>
    createTask: (title: string) => Promise<void>
    editTask: (id: string, title: string) => Promise<void>
    toggleTask: (id: string, done: boolean) => Promise<void>
    loading: (loading: boolean) => void
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  isLoading: false,
  error: null,
  fetchTasks: async () => {
    set({ isLoading: true })
    try {
      const tasks = await getTasks()
      set(tasks)
    } catch (error) {
      set({ error: 'Error al cargar las tareas', isLoading: false })
    }
  },
  deleteTask: async (id: string) => {
    set({ isLoading: true })
    try {
      await deleteTask(id)
      set((state) => ({
        tasks: state.tasks.filter(task => task._id !== id),
        isLoading: false
      }))
    } catch (error) {
      set({ error: 'Error al eliminar la tarea', isLoading: false })
    }
  },
  createTask: async (title: string) => {
    set({ isLoading: true })
    try {
      const newTask = await createTask({ title })
      set((state) => ({
        tasks: [...state.tasks, newTask],
      }))
      console.log(newTask)
    } catch (error) {
      set({ error: 'Error al crear la tarea', isLoading: false })
    }
  },
  editTask: async (id: string, title: string) => {
    set({ isLoading: true })
    try {
      const { task: editedTask } = await editTask(id, { title })
      set((state) => ({
        tasks: state.tasks.map(task => task._id === id ? editedTask : task),
        isLoading: false
      }))
    } catch (error) {
      set({ error: 'Error al editar la tarea', isLoading: false })
    } finally {
      set({ isLoading: false })
    }
  },
  toggleTask: async (id: string, done: boolean) => {
    set({ isLoading: true })
    try {
      const { task: toggledTask } = await toggleTask(id, done)
      set((state) => ({
        tasks: state.tasks.map(task => 
          task._id === id ? toggledTask : task
        ),
        isLoading: false
      }))
    } catch (error) {
      set({ error: 'Error al actualizar el estado de la tarea', isLoading: false })
    }
  },
  loading: (loading: boolean) => {
    set({ isLoading: loading })
  }
}))
