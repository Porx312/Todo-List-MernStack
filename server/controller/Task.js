import Task from "../model/taskModel.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json({ tasks });
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        res.status(500).json({ mensaje: 'Error al obtener las tareas' });
    }
};


export const deleteTask = async (req, res) => {
try{ 
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    res.json({ task });
}catch(error){
    console.log('error al eliminar la tarea:', error)
    res.status(500).json({ mensaje: 'Error al eliminar la tarea' });
}

}
export const createTask = async (req, res) => {
    try {
        const { title, done } = req.body;
        const task = await Task.create({ title, done });
        res.json({ task });
    } catch (error) {
        console.log('error al crear la tarea:', error)
        res.status(500).json({ mensaje: 'Error al crear la tarea' });
    }
}
export const editTask = async (req, res) => {
    try {
        const { id } = req.params;
                const { title, done } = req.body;
        const task = await Task.findByIdAndUpdate(id, { title, done });
        res.json({ task });
    } catch (error) {
        console.log('error al editar la tarea:', error)
        res.status(500).json({ mensaje: 'Error al editar la tarea' });
    }
}
export const toggleTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { done } = req.body;
        const task = await Task.findByIdAndUpdate(id, { done });
        res.json({ task });
    } catch (error) {
        console.log('error al actualizar el estado de la tarea:', error)
        res.status(500).json({ mensaje: 'Error al actualizar el estado de la tarea' });
    }
}

