import React, { useState } from 'react';
import TickerForm from './TickerForm';
import DataTable from './DataTable';
import Header from './Header';
import BarChart from './BarChart';

function App() {
  const [data, setData] = useState([]);

  const onDataReceived = (newData) => {
    setData(newData);
  };

  return (
    <div>
      <Header />
      <TickerForm onDataReceived={onDataReceived} />
      <BarChart data={data} />
      <DataTable data={data} />
    </div>
  );
}

export default App;
