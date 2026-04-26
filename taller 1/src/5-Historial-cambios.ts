type TipoCambio = "nombre" | "correo" | "contraseña";

type CambioRealizado = {
    tipo: TipoCambio;
    datoAnterior : string;
    datoNuevo : string;
}

type ContadorCambios = {
    nombre: number;
    correo: number;
    contraseña: number;
}
        
function historialCambios (historial: CambioRealizado[]): ContadorCambios {
    const contador: ContadorCambios = {
        nombre: 0,
        correo: 0,
        contraseña: 0
    };

    historial.reduce((acc, cambio) => {
        if (cambio.tipo === "nombre") {
            acc.nombre += 1;
        } else if (cambio.tipo === "correo") {
            acc.correo += 1;
        } else if (cambio.tipo === "contraseña") {
            acc.contraseña += 1;
        }
        return acc;
    }, contador);

    return contador;

}