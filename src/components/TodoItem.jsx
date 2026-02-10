const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <li
      className={`group flex items-center justify-between p-4 rounded-2xl border transition-all duration-300
      ${todo.completed ? "bg-slate-50/50 border-transparent" : "bg-white border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100"}
    `}
    >
      <div className="flex items-center gap-4">
        <div className="relative flex items-center justify-center">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
            className="w-5 h-5 rounded-full border-2 border-slate-300 appearance-none checked:bg-indigo-600 checked:border-indigo-600 cursor-pointer transition-all"
          />
          {todo.completed && (
            <span className="absolute text-white text-[10px] pointer-events-none">
              ✓
            </span>
          )}
        </div>

        <span
          className={`text-sm font-medium transition-all duration-300 ${
            todo.completed ? "line-through text-slate-400" : "text-slate-700"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => editTodo(todo)}
          className="p-2 text-slate-400 hover:text-amber-500 hover:bg-amber-50 rounded-xl transition"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
