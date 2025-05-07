class Producto{
    #codigo
    #nombre
    #precio
    constructor(codigo, nombre, precio){
        this.#codigo = codigo
        this.#nombre = nombre
        this.#precio = precio
    }

    get getCodigo(){
        return this.#codigo
    }
    set setCodigo(codigo){
        this.#codigo = codigo
    }

    get getNombre(){
        return this.#nombre
    }
    set setNombre(nombre){
        this.#nombre = nombre
    }

    get getPrecio(){
        return this.#precio
    }
    set setPrecio(precio){
        this.#precio = precio
    }

    imprimirDatos(){
        document.writeln(`Codigo: ${this.#codigo}<br> Nombre: ${this.#nombre}<br> Precio: $${this.#precio}<br>`)
    }
}

const productos = [new Producto('0001', 'Appe Iphone 16 Pro Max (256 GB)', 2800000), new Producto('002', 'Samsung S25 Ultra(256 GB)', 2840000), new Producto('003', 'Motorola Edge 50 Ultra (512 GB)', 1600000)]

for(let i=0; i<3; i++){
    productos[i].imprimirDatos()
    document.writeln("<br>")
}