import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

function TickerForm({ onDataReceived }) {
  const [symbol, setSymbol] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data) {
      onDataReceived(data);
    }
  }, [data, onDataReceived]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://marz.pythonanywhere.com//api/dividend-data/?symbol=${symbol}`);
      const responseData = response.data;
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="" style={{ height: '30vh', marginTop: '25px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField
          variant="outlined"
          label="Enter a ticker symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Fetch Data
        </Button>
      </form>
    </Grid>
  );
}

export default TickerForm;
