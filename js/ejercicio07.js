class Contacto{
    #nombre
    #telefono
    constructor(nombre, telefono){
        this.#nombre = nombre
        this.#telefono = telefono
    }

    get getNombre(){
        return this.#nombre
    }
    set setNombre(nombre){
        this.#nombre = nombre
    }

    get getTelefono(){
        return this.#telefono
    }
    set setTelefono(telefono){
        this.#telefono = telefono
    }


}

class Agenda{
    #tamanio
    #contactos
    constructor(){
        this.#tamanio = 10
        this.#contactos = []
    }

    get getTamanio(){
        return this.#tamanio
    }

    set setTamanio(tamanio){
        if(tamanio > 0) {
            this.#tamanio = tamanio
        }else {
            alert("El tamaño no puede ser negativo")
        }
    }

    get getContactos(){
        return this.#contactos
    }

    aniadirContacto(contacto){
        if (this.#contactos.length < this.#tamanio){
            this.#contactos.push(contacto)
        }else {
            alert("No se pueden almacenar mas contactos")
        }
    }

    existeContacto(contacto){
        for(let i=0; i<this.#contactos.length; i++){
            if(this.#contactos[i].getNombre === contacto.getNombre){
                return true
            }
        }
        return false
    }

    listarContactos(){
        for(let i=0; i<this.#contactos.length; i++){
            document.writeln(`<ul>
                <li>Nombre: ${this.#contactos[i].getNombre}</li>
                <li>Telefono: ${this.#contactos[i].getTelefono}</li>
                </ul>`)
            alert(`
                Nombre: ${this.#contactos[i].getNombre}</li>
                Telefono: ${this.#contactos[i].getTelefono}</li>`)
        }
    }

    buscarContacto(nombreContacto){
        const contactoPosition = this.#contactos.findIndex((contactoBuscado) => contactoBuscado.getNombre === nombreContacto)
        if(contactoPosition >= 0){
            alert(`Contacto: ${nombreContacto} Telefono: ${this.#contactos[contactoPosition].getTelefono}`)
        }else {
            alert("Contacto no encontrado")
        }
    }

    eliminarContacto(contacto){
        const contactoPosition = this.#contactos.findIndex((contactoBuscado) => contactoBuscado.getNombre === contacto.getNombre)
        console.log(contactoPosition)
        if(contactoPosition >= 0){
            this.#contactos.splice(contactoPosition, 1)
            alert("Contacto Eliminado")
        }else {
            alert("El contacto no existe")
        }
    }

    agendaLlena(){
        if(this.#contactos.length === this.#tamanio){
            alert("La agenda está llena")
        }else {
            alert("La agenda no está llena")
        }
    }

    huecosLibres(){
        alert(`Podemos agregar ${this.#tamanio - this.#contactos.length} contactos`)
    }
}

const tamanio = parseInt(prompt("Ingrese el tamaño de la agenda"))
let agenda = new Agenda()
if(tamanio > 0){
    agenda.setTamanio = tamanio
}
console.log(agenda.getTamanio)

do{
    const opcion=parseInt(prompt(`Elija una opcion:
        1- Añadir Contacto
        2- Existe Contacto
        3- Listar Contactos
        4- Buscar Contacto
        5- Eliminar Contacto
        6- ¿Está llena la agenda?
        7- Espacios libres de la agenda
        `))
    switch (opcion){
        case 1:
            const nombreNuevoContacto = prompt("Ingrese el nombre del nuevo contacto")
            const telefonoNuevoContacto = prompt("Ingrese el telefono del nuevo contacto")
            const contactoNuevo = new Contacto(nombreNuevoContacto, telefonoNuevoContacto)
            agenda.aniadirContacto(contactoNuevo)
            break;
        case 2:
            const nombreContacto = prompt("Ingrese el nombre del contacto que desea buscar")
            const telefonoContacto = prompt("Ingrese el telefono del contacto que desea buscar")
            const contacto = new Contacto(nombreContacto, telefonoContacto)
            if(agenda.existeContacto(contacto)){
                alert("Existe el contacto buscado")
            }else {
                alert("No existe el contacto buscado")
            }
            break;
        case 3:
            agenda.listarContactos()
            break;
        case 4:
            const nombreContactoBuscado = prompt("Ingrese el nombre del contacto que desea buscar")
            agenda.buscarContacto(nombreContactoBuscado)
            break;
        case 5:
            const nombreContactoAEliminar = prompt("Ingrese el nombre del contacto que desea buscar")
            const telefonoContactoAEliminar = prompt("Ingrese el telefono del contacto que desea buscar")
            const contactoAEliminar = new Contacto(nombreContactoAEliminar, telefonoContactoAEliminar)
            agenda.eliminarContacto(contactoAEliminar)
            break;
        case 6:
            agenda.agendaLlena()
            break;
        case 7:
            agenda.huecosLibres()
            break;
        default:
            alert("Opción no valida")
    }
}while(confirm("¿Desea continuar?"))