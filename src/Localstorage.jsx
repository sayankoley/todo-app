const reactTodo = "reactTodo"
export const sayan = () => {
    const store = localStorage.getItem(reactTodo);
    return store ? JSON.parse(store) : []
}
export const setdata = (data) => {
    localStorage.setItem(reactTodo, JSON.stringify(data));
}
