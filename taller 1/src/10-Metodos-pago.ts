type PagoTarjeta = {
    metodo: "tarjeta";
    numeroTarjeta: string;
    cvv: number;
};

type PagoTransferencia = {
    metodo: "transferencia";
    banco: string;
    numeroCuenta: string;
};

type PagoEfectivo = {
    metodo: "efectivo";
};

type Pago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

function validarPago(pago: Pago): boolean {
    if (pago.metodo === "tarjeta") {
        return pago.numeroTarjeta.length > 0 && pago.cvv > 0;
    } else if (pago.metodo === "transferencia") {
        return pago.banco.length > 0 && pago.numeroCuenta.length > 0;
    } else if (pago.metodo === "efectivo") {
        return true;
    }

    return false;
}