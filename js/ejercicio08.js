class Persona{
    #nombre
    #edad
    #profesion
    constructor(nombre, edad, profesion){
        this.#nombre = nombre
        this.#edad = edad
        this.#profesion = profesion
    }

    get getNombre(){
        return this.#nombre
    }
    set setNombre(nombre){
        this.#nombre = nombre
    }

    get getEdad(){
        return this.#edad
    }
    set setEdad(edad){
        this.#edad = edad
    }

    get getProfesion(){
        return this.#profesion
    }
    set setProfesion(profesion){
        this.#profesion = profesion
    }

    saludar(){
        document.writeln("Hola")
    }
    despedirse(){
        document.writeln("Adiós")
    }
}

const persona1 = new Persona("Juan Pablo", 34, "Ingeniero")
const persona2 = new Persona("Bianca", 28, "Abogada")

document.writeln(`${persona1.getNombre}:`)
persona1.saludar()
document.writeln(`<br>${persona2.getNombre}:`)
persona2.saludar()
document.writeln(`<br>${persona1.getNombre}:`)
persona1.despedirse()
document.writeln(`<br>${persona2.getNombre}:`)
persona2.despedirse()