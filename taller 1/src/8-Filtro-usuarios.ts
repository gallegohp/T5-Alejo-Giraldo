type Rol = "admin" | "editor" | "visitante";

type Usuario = {
    nombre: string;
    edad: number;
    activo: boolean;
    rol: Rol;
};

function obtenerUsuariosAutorizados(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(usuario => {
        const esMayorDeEdad = usuario.edad >= 18;
        const estaActivo = usuario.activo === true;
        const noEsVisitante = usuario.rol !== "visitante";

        return esMayorDeEdad && estaActivo && noEsVisitante;
    });
}