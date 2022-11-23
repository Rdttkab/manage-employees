import React from 'react';
import { useSelector } from 'react-redux'

function App() {
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  return (
    <div>
      hello world
    </div>
  );
}

export default App;
