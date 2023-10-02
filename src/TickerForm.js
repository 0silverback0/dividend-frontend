import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import axios from 'axios';

function TickerForm({ onDataReceived }) {
  const [symbol, setSymbol] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8000/api/dividend-data/?symbol=${symbol}`);
      const data = response.data;
      onDataReceived(data);
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
