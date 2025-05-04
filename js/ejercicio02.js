const cuenta = {
    titular: 'Alex',
    saldo: 0,
    ingresar: function (cantidad){
        this.saldo = this.saldo + cantidad
    },
    extraer: function (cantidad){
        this.saldo =  this.saldo - cantidad
    },
    informar: function(){
        document.writeln(`Saldo de la cuenta: $${this.saldo} <br>`)
    }
}

cuenta.informar()
cuenta.ingresar(300000)
cuenta.informar()
cuenta.extraer(150000)
cuenta.informar()