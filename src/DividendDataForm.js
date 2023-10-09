import React, { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import axios from 'axios';

function DividendDataForm() {
  const [symbols, setSymbols] = useState('');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.get('https://marz.pythonanywhere.com/api/get-dividend-history/', {
        params: { symbols: symbols.split(',') },
      });

      setResults(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Enter symbols (comma-separated)"
            variant="outlined"
            fullWidth
            value={symbols}
            onChange={(e) => setSymbols(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
          >
            Get Dividend Data
          </Button>
        </Grid>
      </Grid>
      {loading && <p>Loading...</p>}
      {Object.keys(results).length > 0 && (
  <div>
    <h2>Results:</h2>
    {Object.keys(results).map((symbol) => {
  const exDividendDate = new Date(results[symbol].ex_dividend_date);
  const formattedExDividendDate = exDividendDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div key={symbol}>
      <h3>Ticker: {symbol.toUpperCase()}</h3>
      <p>Latest Dividend: {results[symbol].latest_dividend}</p>
      <p>Average Annual Dividend Growth: {results[symbol].average_annual_dividend_growth}%</p>
      <p>Latest Stock Price: {results[symbol].latest_stock_price.toFixed(2)}</p>
      <p>Ex-Dividend Date: {formattedExDividendDate}</p>
    </div>
  );
})}


  </div>
)}

    </form>
  );
}

export default DividendDataForm;
