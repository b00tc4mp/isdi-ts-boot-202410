Inyección de Dependencias: Consiste en proporcionar las dependencias que una clase o función necesita desde el exterior, en lugar de crearlas internamente. Esto se logra, por ejemplo, pasando las dependencias a través del constructor de la clase.

Ventajas: Desacopla el código, facilita las pruebas, y permite cambiar las implementaciones sin modificar las clases que utilizan las dependencias.

Comparación con el Patrón Factory:

Patrón Factory: La clase o función obtiene sus dependencias a través de un Factory, que centraliza la lógica de creación. Esto puede introducir un acoplamiento indirecto y dificultar las pruebas si el Factory no es fácilmente sustituible.

Inyección de Dependencias: La clase o función recibe sus dependencias desde el exterior, lo que promueve el desacoplamiento y facilita la sustitución de las dependencias durante las pruebas o en diferentes entornos.

Pasos:

Definir una interfaz o clase abstracta para el repositorio.
Implementar diferentes clases que cumplen con esta interfaz (por ejemplo, un repositorio en memoria y uno que usa el sistema de archivos).
Inyectar la dependencia del repositorio en las clases o funciones que lo necesitan, en lugar de crearlo internamente.
