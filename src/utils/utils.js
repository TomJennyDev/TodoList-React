export function getLocalStorage() {
  return JSON.parse(localStorage.getItem("todo-list"));
}

export function setLocalStorage(data) {
  localStorage.setItem("todo-list", JSON.stringify(data));
}
