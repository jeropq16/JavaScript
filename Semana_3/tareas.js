<script>
  // Paso 1: Definimos el array de tareas
  const tareas = [];

  // Paso 2: Capturamos el formulario y el contenedor de tareas
  const formulario = document.getElementById('formulario-tarea');
  const inputDescripcion = document.getElementById('descripcion');
  const contenedorTareas = document.getElementById('lista-tareas');

  // Paso 3: Escuchamos el submit del formulario
  formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const descripcion = inputDescripcion.value.trim();
    if (descripcion !== '') {
      const nuevaTarea = {
        descripcion: descripcion,
        completada: false
      };

      tareas.push(nuevaTarea);
      inputDescripcion.value = ''; // Limpiar campo
      mostrarTareas();
    }
  });

  // Paso 4: Función para mostrar tareas
  function mostrarTareas() {
    contenedorTareas.innerHTML = ''; // Limpiar contenido

    tareas.forEach((tarea, index) => {
      const div = document.createElement('div');
      div.className = 'tarea';

      // Cambia estilo si está completada
      div.style.backgroundColor = tarea.completada ? '#d4edda' : '#fff';
      div.style.textDecoration = tarea.completada ? 'line-through' : 'none';

      div.innerHTML = `
        ${tarea.descripcion}
        <button onclick="marcarCompletada(${index})">✔</button>
        <button onclick="eliminarTarea(${index})">🗑️</button>
      `;

      contenedorTareas.appendChild(div);
    });
  }

  // Paso 5: Marcar como completada
  function marcarCompletada(index) {
    tareas[index].completada = true;
    mostrarTareas();
  }

  // Paso 6 (bonus): Eliminar tarea
  function eliminarTarea(index) {
    tareas.splice(index, 1);
    mostrarTareas();
  }
