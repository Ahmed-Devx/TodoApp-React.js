const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
  return (
    <li
      className={`flex items-center justify-between p-5 mb-4 rounded-3xl border transition-all duration-500
      ${todo.completed ? "bg-white/[0.02] border-transparent" : "bg-white/[0.04] border-white/5 hover:border-violet-500/30 shadow-sm"}
    `}
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300
            ${todo.completed ? "bg-violet-500 border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]" : "border-slate-600 hover:border-violet-400"}
          `}
        >
          {todo.completed && (
            <span className="text-white text-[10px] font-black">✓</span>
          )}
        </button>

        <span
          className={`text-[16px] font-medium truncate tracking-wide ${
            todo.completed ? "text-slate-600 line-through" : "text-slate-200"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={() => editTodo(todo)}
          className="p-2 text-slate-500 hover:text-amber-400 bg-white/5 rounded-xl transition-all"
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
          className="p-2 text-slate-500 hover:text-rose-500 bg-white/5 rounded-xl transition-all"
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
