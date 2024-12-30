```javascript
import { useState, useEffect } from 'react';
import deepEqual from 'deep-equal'; // You can use other deep comparison libraries

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Using deep comparison
    if (!deepEqual(props.data, prevProps.data)) {
      console.log('Data changed!');
    }
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```