import React, { useEffect, useState } from 'react';

function App() {
  const [sseData, setSseData] = useState('');

  useEffect(() => {
    // Create an EventSource instance to connect to the SSE endpoint
    const eventSource = new EventSource('http://localhost:3030/sse');

    // Handle SSE messages received from the server
    eventSource.onmessage = (event) => {
      const newData = event.data;
      console.log('sse data', sseData);
      // console.log(' data', sseData);

      setSseData(newData);
    };

    // Handle SSE connection errors
    eventSource.onerror = (error) => {
      console.error('Error occurred:', error);
      eventSource.close();
    };

    // Clean up the EventSource when the component unmounts
    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>SSE React App</h1>
      <div>
        <h2>Server-Sent Event Data:</h2>
        <p>{sseData}</p>
      </div>
    </div>
  );
}

export default App;
