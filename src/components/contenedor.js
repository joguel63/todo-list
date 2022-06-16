import { useState } from "react";
import Formulario from "./formulario";
import Listado from "./listado";
const Contenedor = () => {
  const [tareas, setTareas] = useState([]);
  const [tareaEditar, setTareaEditar] = useState();

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: Date.now(),
      tarea: tarea,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const obtenerTareaEditar = (tarea) => {
    setTareaEditar(tarea);
  };

  const editarTarea = (tarea) => {
    const tareaEditada = { ...tareaEditar, tarea: tarea };
    setTareas(
      tareas.map((tarea) =>
        tarea.id === tareaEditar.id ? tareaEditada : tarea
      )
    );
    setTareaEditar(null);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  const completarTarea = (id) => {
    const nuevasTareas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <Formulario
        agregarTarea={agregarTarea}
        tareaEditar={tareaEditar}
        editarTarea={editarTarea}
      />
      <Listado
        tareas={tareas}
        obtenerTareaEditar={obtenerTareaEditar}
        eliminarTarea={eliminarTarea}
        completarTarea={completarTarea}
      />
    </div>
  );
};

export default Contenedor;
