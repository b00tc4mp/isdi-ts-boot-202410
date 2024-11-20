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
  text: "ir al Consum a por galletas Dinosaurios",
  isDone: false,
};

const updatedTodo = updateTodo(newTodo, { isDone: true });

console.log("updatedTodo :>> ", updatedTodo);

//Actualizar el perfil de un usuario

type User = {
  readonly id: number;
  name: string;
  surname: string;
  isLazy: boolean;
};

const users: User[] = [
  {
    id: 1,
    name: "Dinosauirios",
    isLazy: true,
    surname: "de Vainilla",
  },
  {
    id: 2,
    name: "Camioncito",
    isLazy: false,
    surname: "pegriloso",
  },
  {
    id: 3,
    name: "Pototype",
    isLazy: true,
    surname: "Jonas",
  },
  {
    id: 4,
    name: "handelel",
    isLazy: false,
    surname: "and gretelel",
  },
];

const getUserById = (usersArray: User[], userId: number): User | null => {
  const user = usersArray.find(({ id }) => id === userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

type UserWithoutId = Omit<User, "id">;

const updateUser = (propsToUpdate: Partial<UserWithoutId>): void => {
  const userToUpdate = getUserById(users, 2);

  if (!userToUpdate) {
    throw new Error("User not found");
  }

  const userIndex = users.findIndex(({ id }) => id === userToUpdate.id);

  users.splice(userIndex, 1);

  const updatedUser = { ...userToUpdate, ...propsToUpdate };

  users.push(updatedUser as User);
};

updateUser({ name: "misegundocamionsito", surname: "peroenrefrigerio" });

console.log("users :>> ", users);
