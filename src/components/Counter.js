import { useState } from 'react'

// Functional component. No props needed here, but this shows
// useState (local state) working.
function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="panel">
      <h2>Counter</h2>
      <p className="count-display">{count}</p>
      <div className="btn-row">
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
      </div>
    </section>
  )
}

export default Counter
