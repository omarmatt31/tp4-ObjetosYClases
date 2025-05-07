const auto = {
    color: 'blanco',
    marca: 'Renault',
    modelo:'Kardian',
    encendido: true,
    encender: function (){
        this.encendido = true
        document.writeln("Auto encendido<br>")
    },
    apagar: function (){
        this.encendido = false
        document.writeln('El auto se apagó<br>')
    }
}

auto.encender()

auto.apagar()