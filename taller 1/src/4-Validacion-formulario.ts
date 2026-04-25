type tipoForm = "texto" | "numero" | "email";

type valorForm = number | string;

type CampoFormulario = {
    nombre: string;
    tipo: tipoForm;
    valor: valorForm;
};

function validacionTipo(campos: CampoFormulario[]): string[] {
    const camposInvalidos = campos.filter((campo) => { 
            if (campo.tipo === "numero") {
                return typeof campo.valor !== "number";
            }
            if (campo.tipo === "texto" || campo.tipo === "email") {
                return typeof campo.valor !== "string";
            }
            }).map(campo => campo.nombre); 
    
    return camposInvalidos;
}   