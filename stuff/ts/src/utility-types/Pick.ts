/* Pick<T, K>
Constructs a type by picking the set of properties Keys (string literal or union
of string literals) from Type.

Ejemplo en Entorno de Trabajo:
Cuando necesitas enviar solo cierta información al cliente o mostrar un resumen
de datos.
 */

interface Task {
  description: string;
  isCompleted: boolean;
  difficulty: "easy" | "medium" | "hard";
}

type TaskResume = Pick<Task, "description" | "isCompleted">;

const studyTypescript: TaskResume = {
  description: "Study Typescript",
  isCompleted: true,
};

console.log("studyTypescript :>> ", studyTypescript);
