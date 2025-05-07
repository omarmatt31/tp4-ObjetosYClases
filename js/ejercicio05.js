class Persona{
    #nombre
    #edad
    #dni
    #sexo
    #peso
    #altura
    #anioNac
    constructor(nombre, edad, dni, sexo, peso, altura, anioNac){
        this.#nombre = nombre
        this.#edad = edad
        this.#dni = dni
        this.#sexo = sexo
        this.#peso = peso
        this.#altura = altura
        this.#anioNac = anioNac
    }

    get getNombre() {
        return this.#nombre;
    }
    set setNombre(nombre) {
        this.#nombre = nombre;
    }

    get getEdad() {
        return this.#edad;
    }
    set setEdad(edad) {
        this.#edad = edad;
    }

    get getDni() {
        return this.#dni;
    }
    set setDni(dni) {
        this.#dni = dni;
    }

    get getSexo() {
        return this.#sexo;
    }
    set setSexo(sexo) {
        this.#sexo = sexo;
    }

    get getPeso() {
        return this.#peso;
    }
    set setPeso(peso) {
        this.#peso = peso;
    }

    get getAltura() {
        return this.#altura;
    }
    set setAltura(altura) {
        this.#altura = altura;
    }

    get getAnioNac() {
        return this.#anioNac;
    }
    set setAnioNac(anioNac) {
        this.#anioNac = anioNac;
    }


    mostrarGeneracion(){
        if(this.#anioNac >= 1994 && this.#anioNac <= 2010){
            document.writeln(`Esta persona pertenece a la Generación Z <br>`)
            document.writeln(`Rasgo Característico: Irreverencia😋 <br>`)
        }else if(this.#anioNac >= 1981 && this.#anioNac <= 1993){
            document.writeln(`Esta persona pertenece a la Generación Y (millennials) <br>`)
            document.writeln(`Rasgo Característico: Frustración😖 <br>`)
        }else if(this.#anioNac >= 1969 && this.#anioNac <= 1980){
            document.writeln(`Esta persona pertenece a la Generación X <br>`)
            document.writeln(`Rasgo Característico: Obseción por el éxito😎 <br>`)
        }else if(this.#anioNac >= 1949 && this.#anioNac <= 1968){
            document.writeln(`Esta persona pertenece a la Generación Baby Boom <br>`)
            document.writeln(`Rasgo Característico: Ambición🤑 <br>`)
        }else if(this.#anioNac >= 1930 && this.#anioNac <= 1948){
            document.writeln(`Esta persona pertenece a la Generación Silent Generation (los niños de la posguerra)<br>`)
            document.writeln(`Rasgo Característico: Austeridad😐 <br>`)
        }else {
            document.writeln("Esta persona no pertenece a una generación en particular")
        }
    }

    esMayorDeEdad(){
        if((2025-this.#anioNac)>=18){
            document.writeln("La persona es mayor de edad<br>")
        }else {
            document.writeln("La persona es menor de edad<br>")
        }
    }

    mostrarDatos(){
        document.writeln(`<ul>
            <li>Nombre: ${this.getNombre}</li>
            <li>Edad: ${this.getEdad}</li>
            <li>DNI: ${this.getDni}</li>
            <li>Sexo: ${this.getSexo}</li>
            <li>Peso: ${this.getPeso}Kg</li>
            <li>Altura: ${this.getAltura}m</li>
            <li>Año de Nacimiento: ${this.getAnioNac}</li>
            </ul>`)
    }

    generaDNI(){
        return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
    }
}

const persona = new Persona("Jorge Garcia", 38, 32567890, "H hombre", 79.9, 1.78, 1986)
persona.mostrarDatos()
persona.mostrarGeneracion()
persona.esMayorDeEdad()
document.writeln("Generar DNI:", persona.generaDNI())