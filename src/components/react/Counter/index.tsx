import type React from 'react'
import BuggyCounter from '../BuggyCounter';
import ErrorBoundary from '../ErrorBoundary';

const Counter: React.FC = () => {
  return (
    <ErrorBoundary fallback={<h1>Something went wrong.</h1>}>
      <BuggyCounter />
    </ErrorBoundary>
  )
}

export default Counter