const TodoInput = ({ task, setTask, addOrUpdateTodo, editId }) => {
  return (
    <div className="relative flex gap-3 mb-8">
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addOrUpdateTodo()}
        placeholder="What needs to be done?"
        className="flex-1 bg-white border border-slate-200 rounded-2xl px-5 py-3.5 text-slate-700 outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all shadow-sm"
      />
      <button
        onClick={addOrUpdateTodo}
        className={`px-6 py-3.5 rounded-2xl text-white font-semibold shadow-lg shadow-indigo-200 transition-all active:scale-95
          ${editId ? "bg-amber-500 hover:bg-amber-600 shadow-amber-100" : "bg-indigo-600 hover:bg-indigo-700"}
        `}
      >
        {editId ? "Update" : "Create"}
      </button>
    </div>
  );
};

export default TodoInput;
