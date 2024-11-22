const ul = document.getElementById("todo-list")!;
const form = document.querySelector("form")!;
const input = document.getElementById("todo-input")! as HTMLInputElement;
const button = document.getElementById("todo-button");
const main = document.getElementById("main")!;

type Todo = {
  text: string;
  isCompleted: boolean;
};

const getTodos = (): Todo[] => {
  return JSON.parse(localStorage.getItem("todos") || "[]");
};

const todos = getTodos();

todos.forEach(createTodo);

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const { value: inputValue } = input;

  const todo: Todo = {
    text: inputValue,
    isCompleted: false,
  };

  createTodo(todo);
  todos.push(todo);

  saveTodos();

  form.reset();
});

function createTodo(todo: Todo) {
  const li = document.createElement("li");
  li.append(todo.text);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.checked = todo.isCompleted;

  checkbox.addEventListener("change", () => {
    todo.isCompleted = checkbox.checked;

    saveTodos();
  });

  li.appendChild(checkbox);

  ul.appendChild(li);

  main.appendChild(ul);
}

const saveTodos = () => localStorage.setItem("todos", JSON.stringify(todos));
