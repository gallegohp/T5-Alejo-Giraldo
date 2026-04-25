type SMS = {
    numero: number;
    mensaje: string;
}

type Email = {
    receptor: string;
    mensaje: string
    }

type Push = {
    esquina: string 
}

type Notificacion = SMS | Email | Push

function enviarNotificacion(notificacion : Notificacion){
    if("numero" in notificacion){
        console.log(`Enviando SMS al numero ${notificacion.numero} con el mensaje: ${notificacion.mensaje}`)
    }
    if("receptor" in notificacion){
        console.log(`Enviando Email a ${notificacion.receptor} con el mensaje: ${notificacion.mensaje}`)
    }
    if("esquina" in notificacion){
        console.log(`Enviando Push a la esquina ${notificacion.esquina}`)
    }
}
