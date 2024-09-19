import Swal from 'sweetalert2';
import addIcon from "../assets/add.png";
import { useTaskStore } from '../store/Task/Task';
const Add = () => {
    const createTask = useTaskStore((state: any) => state.createTask);
    const mostrarModal = () => {
        Swal.fire({
            title: '¿Deseas agregar una nueva tarea?',
            input: 'text',
            inputPlaceholder: 'Escribe tu nueva tarea aquí',
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            cancelButtonText: 'Cancelar',
            inputValidator: (value) => {
                if (!value) {
                    return 'Debes escribir algo para agregar una tarea';
                }
                return null;
            }
        }).then((result) => {
            if (result.isConfirmed && result.value) {
                createTask(result.value);
                Swal.fire(
                    '¡Tarea agregada!',
                    'La nueva tarea ha sido añadida a la lista.',
                    'success'
                );
            }
        });
    };

    return (
        <button 
            onClick={mostrarModal}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center"
        >
            <img className="w-4 h-4 mr-2" src={addIcon} alt="agregar" />
            Agregar Tarea
        </button>
    );
};

export default Add;
