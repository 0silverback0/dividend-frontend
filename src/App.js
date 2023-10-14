import React, { useState } from 'react';
import TickerForm from './TickerForm';
import Header from './Header';
import DividendDataPage from './DividendDataPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BarChart from './BarChart';

function App() {
  const [data, setData] = useState([]);
  const onDataReceived = (newData) => {
    // Handle the received data here
    setData(newData);
    
  };

  return (
    <div>
     
      <Router>
      <Header />
        <Routes>
          <Route path="/m" element={<DividendDataPage />} />
          <Route path='/'element={
              <div>
                <TickerForm onDataReceived={onDataReceived} />
                <BarChart data={data} />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
