// // App.js

// import React, { useState } from 'react';
// import TickerForm from './TickerForm';
// import DataTable from './DataTable';
// import Header from './Header';
// import { fetchDividendData } from './dividendService'; // Import your API service

// function App() {
//   const [data, setData] = useState([]);

//   const handleSymbolSubmit = (symbol) => {
//     fetchDividendData(symbol)
//       .then((response) => {
//         setData(response); // Assuming your API response contains a 'data' property
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   return (
//     <div>
//       <Header />
//       <TickerForm onSymbolSubmit={handleSymbolSubmit} />
//       <DataTable data={data} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import TickerForm from './TickerForm';
import DataTable from './DataTable';
import Header from './Header';

function App() {
  const [data, setData] = useState([]);

  const onDataReceived = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <Header />
      <TickerForm onDataReceived={onDataReceived} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
