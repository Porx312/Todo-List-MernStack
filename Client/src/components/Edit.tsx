import Swal from 'sweetalert2';
import editIcon from "../assets/edit.png";
import { useTaskStore } from '../store/Task/Task';

const Edit = ({id, data}: {id: string, data: string}) => {
    const editTask = useTaskStore((state: any) => state.editTask);
  const mostrarModal = () => {
    Swal.fire({
      title: '¿Deseas editar esta tarea?',
      text: "Podrás modificar el contenido de la tarea",
      input: 'text',
      inputPlaceholder: data,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, editar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        editTask(id, result.value);
        // Aquí iría la lógica para editar la tarea
        Swal.fire(
          '¡Editado!',
          'La tarea ha sido modificada.',
          'success'
        )
      }
    })
  }

  return (
    <button 
      onClick={mostrarModal}
      className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
    >
      <img className="w-4 h-4" src={editIcon} alt="editar" />
    </button>
  )
}

export default Edit
