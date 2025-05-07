class Libro{
    #isbn
    #titulo
    #autor
    #numeroDePaginas
    constructor(isbn, titulo, autor, numeroDePaginas){
        this.#isbn = isbn
        this.#titulo = titulo
        this.#autor = autor
        this.#numeroDePaginas = numeroDePaginas
    }

    get getIsbn() {
        return this.#isbn;
    }
    set setIsbn(isbn) {
        this.#isbn = isbn;
    }

    get getTitulo() {
        return this.#titulo;
    }
    set setTitulo(titulo) {
        this.#titulo = titulo;
    }

    get getAutor() {
        return this.#autor;
    }
    set setAutor(autor) {
        this.#autor = autor;
    }

    get getNumeroDePaginas() {
        return this.#numeroDePaginas;
    }
    set setNumeroDePaginas(numeroDePaginas) {
        this.#numeroDePaginas = numeroDePaginas;
    }

    mostrarLibro(){
        document.writeln(`El libro ${this.getTitulo} 
            con ISBN ${this.getIsbn}
            creado por el autor ${this.getAutor}
            tiene ${this.getNumeroDePaginas} páginas <br>`)
    }
}

const libro1 = new Libro("978-84-376-0494-7", "Don Quijote de la Mancha", "Miguel de Cervantes", 1025)
const libro2 = new Libro("978-84-663-4518-9", "1984", "George Orwell", 329)

libro1.mostrarLibro()
libro2.mostrarLibro()

if((libro1.getNumeroDePaginas - libro2.getNumeroDePaginas)>0){
    document.writeln(`El libro ${libro1.getTitulo} tiene mayor cantidad de páginas`)
}else if((libro1.getNumeroDePaginas - libro2.getNumeroDePaginas)<0){
    document.writeln(`El libro ${libro2.getTitulo} tiene mayor cantidad de páginas`)
}else {
    document.writeln(`Los dos libros tienen la misma cantidad de páginas`)
}

