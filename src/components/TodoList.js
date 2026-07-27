import TodoItem from './TodoItem'

// This component demonstrates:
// 1. LIST RENDERING: mapping an array of data into an array of JSX elements
// 2. KEYS: each element needs a stable, unique `key` so React can
//    track items correctly across re-renders (never use array index
//    if items can be reordered/deleted -- we use todo.id instead)
// 3. CONDITIONAL RENDERING: showing an empty-state message when
//    there is nothing to show
function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty-state">Nothing here yet. Add a task above.</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
