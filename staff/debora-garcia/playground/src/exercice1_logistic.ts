/*Desafío: Sistema de Gestión de Transporte

Contexto:

Una empresa de logística necesita gestionar diferentes tipos de vehículos para el
transporte de mercancías. Todos los vehículos comparten cierta lógica común (como el
cálculo de combustible necesario), pero algunos vehículos tienen capacidades especiales,
como refrigeración o transporte de materiales peligrosos. 

Requisitos:

Crear una clase abstracta Vehiculo que contenga:

Propiedades comunes: pesoCarga, distanciaRecorrer.
        - Método común para calcular el combustible necesario (calcularCombustible).
        - Método abstracto mostrarDetalle que cada subclase debe implementar.
    Crear una interfaz Refrigerado que defina el método mantenerTemperatura.

    Crear una interfaz Peligroso que defina el método verificarSeguridad.

    Crear las siguientes subclases que extienden Vehiculo y pueden implementar interfaces:

    Camion que solo extiende Vehiculo.
    CamionRefrigerado que extiende Vehiculo e implementa Refrigerado.
    CamionPeligroso que extiende Vehiculo e implementa Peligroso.
Implementar los métodos necesarios en cada clase, asegurando que realizan operaciones lógicas
(por ejemplo, cálculos o verificaciones).

Objetivo:

Demostrar el uso de clases abstractas para compartir lógica común.
Usar interfaces para añadir funcionalidades específicas a ciertas clases.
Combinar ambos conceptos en un sistema coherente.
*/


abstract class Vehiculo {
    constructor(
        public pesoCarga: number, //deberia ser protected
        public distanciaRecorrer: number,
    ) { }

    calcularCombustible(): number {
        return (this.pesoCarga * 0.5) + (this.distanciaRecorrer / 5)
    }

    abstract mostrarDetalle(): string

}

interface IPeligroso {
    verificarSeguridad(): boolean

}

interface IRefrigerado {
    mantenerTemperatura(): boolean

}

class Camion extends Vehiculo {
    mostrarDetalle(): string {
        return `Camión con una carga de ${this.pesoCarga} y ${this.distanciaRecorrer} Km a recorrer`

    }
}

class CamionRefrigerado extends Vehiculo implements IRefrigerado {
    constructor(pesoCarga: number, distanciaRecorrer: number) {
        super(pesoCarga, distanciaRecorrer)
    }
    mostrarDetalle(): string {
        return `Camión refrigerado con una carga de ${this.pesoCarga} y ${this.distanciaRecorrer} Km a recorrer`

    }

    mantenerTemperatura(): boolean {
        return true
    }

}

class CamionPeligroso extends Vehiculo implements IPeligroso {
    constructor(pesoCarga: number, distanciaRecorrer: number) {
        super(pesoCarga, distanciaRecorrer)
    }

    mostrarDetalle(): string {
        return `Camión peligroso con una carga de ${this.pesoCarga} y ${this.distanciaRecorrer} Km a recorrer`

    }

    verificarSeguridad(): boolean {
        return true
    }
}

const camion1 = new CamionPeligroso(18, 300)
const camion2 = new CamionRefrigerado(34, 1200)

console.log(camion1.calcularCombustible())
console.log(camion2.calcularCombustible())

console.log(camion1)

console.log(camion1.verificarSeguridad())


