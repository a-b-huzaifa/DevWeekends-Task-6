import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Counter from './components/Counter'

const STORAGE_KEY = 'react-basics-todos'

function loadInitialTodos() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function App() {
  const [todos, setTodos] = useState(loadInitialTodos)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function addTodo(text) {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), text, done: false },
    ])
  }

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const visibleTodos = todos.filter((t) => {
    if (filter === 'active') return !t.done
    if (filter === 'done') return t.done
    return true
  })

  const remaining = todos.filter((t) => !t.done).length

  return (
    <main className="app">
      <header>
        <h1>React Basics</h1>
        <p className="subtitle">
          functional components / props / useState / useEffect /
          conditional + list rendering
        </p>
      </header>

      <Counter />

      <section className="panel">
        <h2>To-Do</h2>
        <TodoForm onAdd={addTodo} />

        <div className="filter-row">
          {['all', 'active', 'done'].map((f) => (
            <button
              key={f}
              className={filter === f ? 'active-filter' : ''}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <TodoList
          todos={visibleTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />

        {todos.length > 0 && (
          <p className="status-line">
            {remaining} of {todos.length} remaining
          </p>
        )}
      </section>
    </main>
  )
}

export default App
