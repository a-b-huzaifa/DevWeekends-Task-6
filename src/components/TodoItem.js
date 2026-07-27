// Functional component that receives data and callbacks via PROPS.
// It never touches state directly -- the parent (TodoList/App) owns
// the state and passes down `todo` plus the handlers it needs.
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.done ? 'done' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        x
      </button>
    </li>
  )
}

export default TodoItem
