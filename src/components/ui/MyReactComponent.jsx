
import { useState } from 'react';

export default function MyReactComponent({ message, className }) {
  const [count, setCount] = useState(0);

  return (
    <div className={`p-4 border rounded-lg ${className || ''}`}>
      <p>{message}</p>
      <p>You clicked {count} times</p>
      <button
        className="px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        onClick={() => setCount(count + 1)}
      >
        Click me
      </button>
    </div>
  );
}
