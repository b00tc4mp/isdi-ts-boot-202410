/*
Partial<Type>
Constructs a type with all properties of Type set to optional. This utility
will return a type that represents all subsets of a given type.

Esto es útil para funciones de actualización donde no todos los campos deben
ser proporcionados.
*/

type Todo = {
  text: string;
  description: string;
  isDone: boolean;
};

const updateTodo = (todo: Todo, filesToUpdate: Partial<Todo>): Todo => {
  return { ...todo, ...filesToUpdate };
};

const newTodo: Todo = {
  description: "hacer compra en el super",
  text: "ir al Consume a por galletas Dinosauirios",
  isDone: false,
};

const updatedTodo = updateTodo(newTodo, { isDone: true });

console.log("updatedTodo :>> ", updatedTodo);

//TODO Actualizar el perfil de un usuario
