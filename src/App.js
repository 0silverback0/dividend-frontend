// import React, { useState } from 'react';
// import TickerForm from './TickerForm';
// import Header from './Header';
// import DividendDataPage from './DividendDataPage'; // Import the DividendDataPage component
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BarChart from './BarChart';

// function App() {
//   const [data, setData] = useState([]);
//   const onDataReceived = (newData) => {
//     // Handle the received data here
//     setData(newData);
//     console.log('Received data:', newData);
//   };

//   return (
//     <div>
//       <Header />
//       <Router>
//         <Routes>
//           {/* Define the route for DividendDataPage */}
//           <Route path="/m" element={<DividendDataPage />} />

//           {/* Define the default route */}
//           <Route path='/' element={<TickerForm onDataReceived={onDataReceived} />} />
//           <Route path='/' element={<BarChart data={data} />} />
//         </Routes>
//       </Router>
      
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import TickerForm from './TickerForm';
import Header from './Header';
import DividendDataPage from './DividendDataPage'; // Import the DividendDataPage component
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
      <Header />
      <Router>
        <Routes>
          {/* Define the route for DividendDataPage */}
          <Route path="/m" element={<DividendDataPage />} />

          {/* Define the default route */}
          <Route
            path='/'
            element={
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
