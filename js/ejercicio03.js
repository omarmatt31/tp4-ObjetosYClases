class Rectangulo{
    #alto
    #ancho
    constructor(alto, ancho){
        this.#alto = alto
        this.#ancho = ancho
    }

    get getAlto(){
        return this.#alto
    }

    set setAlto(alto){
        this.#alto = alto
    }

    get getAncho(){
        return this.#ancho
    }

    set setAncho(ancho){
        this.#ancho = ancho
    }

    perimetro(){
        return 2*(this.#alto + this.#ancho)
    }

    area(){
        return this.#alto*this.#ancho
    }
}

const rectaungulo1 = new Rectangulo(24, 5)
document.writeln(`Alto del rectangulo: ${rectaungulo1.getAlto}<br>`)
document.writeln(`Ancho del rectangulo: ${rectaungulo1.getAncho}<br>`)
document.writeln("El perímetro del rectangulo 1 es: ", rectaungulo1.perimetro(), "<br>")
document.writeln("El área del rectangulo 1 es: ", rectaungulo1.area(), "<br>")