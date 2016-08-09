

var Carta = function(palo, numero) {
    
    this.palo = palo;
    this.numero = numero;
    
    function toString() {
        return this.palo + " " + this.numero;
    }
}