const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.querySelector("ul")!;

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) {
    return [];
  }
  return JSON.parse(todosJSON);
}
interface Todo {
  text: string;
  completed: boolean;
}
const todos: Todo[] = readTodos();
todos.forEach((todo) => {
  createTodo(todo);
});

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodo(todo: Todo) {
  const newLi = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.checked = todo.completed;
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  list.append(newLi);
  input.value = "";
}
form.addEventListener("submit", handleSubmit);
