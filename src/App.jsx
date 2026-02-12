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
      setTodos(todos.map((t) => (t.id === editId ? { ...t, text: task } : t)));
      setEditId(null);
    } else {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    }
    setTask("");
  };

  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));
  const toggleComplete = (id) =>
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  const editTodo = (t) => {
    setTask(t.text);
    setEditId(t.id);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-[#1e1b4b] to-slate-900 flex justify-center items-start sm:items-center p-4 pt-10">
      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-6 sm:p-10">
        <header className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Focus<span className="text-violet-500">.</span>
          </h1>
          <p className="text-slate-400 font-medium mt-2">
            Manage your daily flow
          </p>
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
          <div className="mt-10 pt-6 border-t border-white/5 flex justify-between items-center">
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-xs font-bold uppercase tracking-wider">
                {todos.filter((t) => t.completed).length} Done
              </span>
              <span className="px-3 py-1 bg-slate-500/10 text-slate-400 rounded-full text-xs font-bold uppercase tracking-wider">
                {todos.length} Total
              </span>
            </div>
            <button
              onClick={() => setTodos([])}
              className="text-slate-500 hover:text-rose-400 text-sm font-bold transition-colors"
            >
              Reset All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
