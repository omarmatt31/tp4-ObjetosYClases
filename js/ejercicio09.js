class Animal{
    #nombre
    #edad
    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
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

    emitirSonido(){
    }
}

class Perro extends Animal{
    #color
    constructor(nombre, edad, color){
        super (nombre, edad)
        this.#color = color
    }

    get getColor(){
        return this.#color
    }
    set setColor(color){
        this.#color = color
    }

    emitirSonido(){
        document.writeln("Guau Guau Guau")
    }
}

class Gato extends Animal{
    #color
    constructor(nombre, edad, color){
        super (nombre, edad)
        this.#color = color
    }

    get getColor(){
        return this.#color
    }
    set setColor(color){
        this.#color = color
    }

    emitirSonido(){
        document.writeln("Miau Miau Miau")
    }
}

const gatoNuevo = new Gato("Felipe", 3, "Negro")
const perroNuevo = new Perro("Toby", 8, "Gris")

perroNuevo.emitirSonido()
gatoNuevo.emitirSonido()