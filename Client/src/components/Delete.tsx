import Swal from 'sweetalert2';
import deleteIcon from "../assets/delete.png";
import { useTaskStore } from '../store/Task/Task';

const Delete = ({ id }: { id: string }) => {
  const deleteTask = useTaskStore(state => state.deleteTask)
  
  const mostrarModal = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(id)
          .then(() => {
            Swal.fire(
              '¡Eliminado!',
              'La tarea ha sido eliminada.',
              'success'
            )
          })
          .catch((error) => {
            console.error('Error al eliminar la tarea:', error);
            Swal.fire(
              'Error',
              'No se pudo eliminar la tarea.',
              'error'
            )
          })
      }
    })
  }

  return (
    <button 
      onClick={mostrarModal}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
    >
      <img className="w-4 h-4" src={deleteIcon} alt="Eliminar" />
    </button>
  )
}

export default Delete
