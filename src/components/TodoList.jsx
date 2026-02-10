import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-slate-400 font-medium">All clear for now!</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
