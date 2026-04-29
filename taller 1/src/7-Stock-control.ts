type CategoriaProducto = "alimentos" | "tecnologia" | "papeleria";

type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: CategoriaProducto;
};

function tieneBajoStock(producto: Producto): boolean {
    if (producto.categoria === "alimentos") {
        return producto.cantidad < 20;
    } else if (producto.categoria === "tecnologia") {
        return producto.cantidad < 5;
    } else if (producto.categoria === "papeleria") {
        return producto.cantidad < 50;
    }

    return false;
}