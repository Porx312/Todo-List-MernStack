const Url = "http://localhost:3000/"

export const getTasks = async () => {
    try {
        const response = await fetch(`${Url}`)
        if (!response.ok) {
            throw new Error('Error al obtener las tareas')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error en getTasks:', error)
        throw error
    }
}
export const createTask = async ({title}: {title: string}) => {
    try {
        const response = await fetch(`${Url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })
        if (!response.ok) {
            throw new Error('Error al crear la tarea')
        }
        const responseData = await response.json()
        return responseData
    } catch (error) {
        console.error('Error en createTask:', error)
        throw error
    }
}
export const deleteTask = async (id: string) => {
    try {
        const response = await fetch(`${Url}${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Error al eliminar la tarea')
        }
        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error en deleteTask:', error)
        throw error
    }
}
export const editTask = async (id: string, data: {title: string}) => {
    try {
        const response = await fetch(`${Url}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: data.title })
        })
        if (!response.ok) {
            throw new Error('Error al editar la tarea')
        }
        const responseData = await response.json()
        return responseData
    } catch (error) {
        console.error('Error en editTask:', error)
        throw error
    }
}
export const toggleTask = async (id: string, done: boolean) => {
    try {
        const response = await fetch(`${Url}${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ done })
        })
        if (!response.ok) {
            throw new Error('Error al actualizar el estado de la tarea')
        }
        const responseData = await response.json()
        return responseData
    } catch (error) {
        console.error('Error en toggleTask:', error)
        throw error
    }
}