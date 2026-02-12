const TodoInput = ({ task, setTask, addOrUpdateTodo, editId }) => {
  return (
    <div className="relative group mb-10">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addOrUpdateTodo()}
        placeholder="Type something to achieve..."
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all placeholder:text-slate-600 shadow-inner"
      />
      <button
        onClick={addOrUpdateTodo}
        className={`absolute right-2 top-2 bottom-2 px-6 rounded-xl text-white font-bold transition-all active:scale-95 shadow-lg
          ${editId ? "bg-amber-500 shadow-amber-500/20" : "bg-violet-600 shadow-violet-500/20 hover:bg-violet-500"}
        `}
      >
        {editId ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TodoInput;
