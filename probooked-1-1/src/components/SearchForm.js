import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


function SearchForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter Details Below
      </Typography>
      <Grid container spacing={24}>



        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="billing address-line1"
          />
        </Grid>



        <Grid item xs={6} sm={4}>
          <TextField id="state" name="state" label="State" fullWidth />
        </Grid>

        <Grid item xs={6} sm={4}>
          <TextField
            required
            id="destination"
            name="destination"
            label="Destination"
            fullWidth
            autoComplete="user destination"
          />
          
        </Grid>
        </Grid>

    </React.Fragment>
  );
}

export default SearchForm;
