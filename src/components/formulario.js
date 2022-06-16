import { useEffect, useState } from "react";

const Formulario = ({ agregarTarea, tareaEditar, editarTarea }) => {
  const [tarea, setTarea] = useState("");

  useEffect(() => {
    if (tareaEditar) setTarea(tareaEditar.tarea);
  }, [tareaEditar]);

  const handleChange = (e) => {
    setTarea(e.target.value);
  };

  const handleSubmit = () => {
    if (tareaEditar) {
      editarTarea(tarea);
    } else agregarTarea(tarea);
    setTarea("");
  };
  return (
    <>
      <textarea value={tarea} rows={10} onChange={handleChange} />
      <button onClick={handleSubmit}>click</button>
    </>
  );
};

export default Formulario;
