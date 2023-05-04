import type React from 'react'
import { useState } from 'react'

const TryCatchHandling: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const increment = () => {
    try {
      if (count === 5) {
        throw new Error("MAX NUMBER HAS BEEN REACHED");
      }
      setCount(prevCount => prevCount + 1);
    }
    catch (error: any) {
      setError(error.message);
    }
  }
  const decrement = () => setCount(prevCount => prevCount - 1);

  if (!!error) {
    return (
      <h1>{ error }</h1>
    )
  }

  return (
    <div>
      <h1>Try-Catch Handling</h1>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default TryCatchHandling