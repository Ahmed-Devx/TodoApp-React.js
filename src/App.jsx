import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const addOrUpdateTodo = () => {
    if (!task.trim()) return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: task } : todo,
        ),
      );
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-100 flex justify-center items-center p-6">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md border border-white shadow-2xl rounded-3xl p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-slate-800 tracking-tight">
            Work Plan <span className="text-indigo-600">.</span>
          </h1>
          <p className="text-slate-500 mt-1">Stay organized and productive.</p>
        </header>

        <TodoInput
          task={task}
          setTask={setTask}
          addOrUpdateTodo={addOrUpdateTodo}
          editId={editId}
        />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />

        {todos.length > 0 && (
          <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400 font-medium">
            <span>
              {todos.filter((t) => t.completed).length} of {todos.length} tasks
              done
            </span>
            <button
              onClick={() => setTodos([])}
              className="hover:text-indigo-500 transition"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
