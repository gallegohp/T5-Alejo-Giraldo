type Categoria = "tareas" | "quices" | "examenes";

type Calificacion = {
    estudianteId: number;
    materia: string;
    categoria: Categoria;
    nota: number;
}

type PromedioCategoria = {
    tareas: number;
    quices: number;
    examenes: number;
}

function promedioPorCategoria(calificaciones: Calificacion[], estudianteId: number): PromedioCategoria {
    const notasEstudiante = calificaciones.filter(calificacion => calificacion.estudianteId === estudianteId);

    const sumaNotas: PromedioCategoria = {
        tareas: 0,
        quices: 0,
        examenes: 0
    };

    const conteoNotas: PromedioCategoria = {
        tareas: 0,
        quices: 0,
        examenes: 0
    };

    notasEstudiante.forEach(calificacion => {
        const cat = calificacion.categoria;
        sumaNotas[cat] += calificacion.nota;
        conteoNotas[cat] += 1;
    });

    return {
        tareas: sumaNotas.tareas / (conteoNotas.tareas || 1),
        quices: sumaNotas.quices / (conteoNotas.quices || 1),
        examenes: sumaNotas.examenes / (conteoNotas.examenes || 1)
    };
}