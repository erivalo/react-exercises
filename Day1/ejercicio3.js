class Auto {
    constructor(tipo, anio, hasSoat) {
        this.tipo = tipo;
        this.anio = anio;
        this.hasSoat = hasSoat;
    }

    getTipo() {
        return this.tipo;
    }

    setTipo(tipo) {
        this.tipo = tipo;
    }

    getAnio() {
        return this.anio;
    }

    setAnio(anio) {
        this.anio = anio;
    }

    getHasSoat() {
        return this.hasSoat;
    }

    setHasSoat(hasSoat) {
        this.hasSoat = hasSoat;
    }
}

class Toyota extends Auto {
    constructor(tipo, anio, hasSoat, modelo) {
        super(tipo, anio, hasSoat);
        this.modelo = modelo;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    toString() {
        return `${this.getTipo()} - ${this.getAnio()} - ${this.getHasSoat()} - ${this.getModelo()}`;
    }
}

const toyota = new Toyota("Vagoneta", 2019, true, "Toyota praus");
console.log(toyota.toString());

