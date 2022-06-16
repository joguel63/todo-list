import { useState } from "react";

const Listado = ({
  tareas,
  obtenerTareaEditar,
  eliminarTarea,
  completarTarea,
}) => {
  const [filtro, setFiltro] = useState("all");

  const filtrarTareas = (filtrar) => {
    switch (filtrar) {
      case "todas":
        return tareas;

      case "completadas":
        return tareas.filter((tarea) => tarea.completada);

      case "incompletas":
        return tareas.filter((tarea) => !tarea.completada);

      default:
        return tareas;
    }
  };
  return (
    <>
      <div>
        <button onClick={() => setFiltro("todas")}>Todos</button>
        <button onClick={() => setFiltro("completadas")}>Completados</button>
        <button onClick={() => setFiltro("incompletas")}>Pendientes</button>
      </div>

      {filtrarTareas(filtro).map((tarea) => (
        <div
          key={tarea.id}
          style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
        >
          <input
            type="checkbox"
            checked={tarea.completada}
            onChange={() => completarTarea(tarea.id)}
          />
          <p>{tarea.tarea}</p>
          <button onClick={() => obtenerTareaEditar(tarea)}>editar</button>
          <button onClick={() => eliminarTarea(tarea.id)}>eliminar</button>
        </div>
      ))}
    </>
  );
};

export default Listado;
