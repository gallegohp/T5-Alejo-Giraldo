type Unidad = "cm" | "m" | "km";

type Conversion = {
    valor: number;
    desde: Unidad;
    a: Unidad;
};

function convertirUnidades(conversion : Conversion): number {
    let valorEnMetros: number = 0;

    if (conversion.desde === "cm") {
        valorEnMetros = conversion.valor / 100;
    } else if (conversion.desde === "km") {
        valorEnMetros = conversion.valor * 1000; 
    } else {
        valorEnMetros = conversion.valor; 
    }

    if (conversion.a === "cm") {
        return valorEnMetros * 100;
    } else if (conversion.a === "km") {
        return valorEnMetros / 1000;
    }

    return valorEnMetros;
}