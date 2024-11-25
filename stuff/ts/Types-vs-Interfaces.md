# Type vs Interfaces

[Por Mat Pocock, "The TS wizard"](https://www.totaltypescript.com/type-vs-interface-which-should-you-use)

Por defecto Type, no Interfaces.
La documentación de TypeScript tiene una [gran guía](https://www.totaltypescript.com/type-vs-interface-which-should-you-use#:~:text=documentation%20has%20a-,great%20guide,-on%20this.%20They) sobre esto. Cubren cada característica (aunque no la firma de índice implícita), pero llegan a una conclusión diferente a la mía.

Recomiendan que elijas basándote en tus preferencias personales, con lo que estoy de acuerdo. La diferencia entre el tipo y la interfaz es lo suficientemente pequeña como para que puedas usar cualquiera de los dos sin muchos problemas.

Pero el equipo de TS recomienda que uses por defecto la interface y sólo uses type cuando lo necesites.

Yo recomendaría lo contrario. Las características de fusión de declaraciones y firmas de índice implícitas son lo suficientemente sorprendentes como para asustarle a la hora de usar interfaces por defecto.

Las interfaces siguen siendo mi recomendación para la herencia de objetos, pero te recomiendo que uses type por defecto. Es un poco más flexible y un poco menos sorprendente.
