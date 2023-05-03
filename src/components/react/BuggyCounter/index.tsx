import type React from 'react'
import { useState } from 'react'

const BuggyCounter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  if (count === 5) throw new Error('I crashed!');

  return (
    <div>
      <h1>Buggy Counter</h1>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default BuggyCounter