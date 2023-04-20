import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const colorsMap = new Map([
  ['amarillo', '#fed533'],
  ['rojo', '#e7352b'],
  ['naranja', '#f36b26'],
  ['verde', '#008827'],
  ['azul', '#1790c8'],
  ['morado', 'purple'],
  ['marron', 'brown'],
  ['rosado', '#f0728f'],
  ['gris', '#8f979d'],
  ['negro', 'black'],
  ['blanco', 'white'],
]);

const Filters = ({ filters }) => {
  const [genders, setGenders] = React.useState({
    hombre: false,
    mujer: false,
  });

  const handleChangeGender = (event) => {
    setGenders({
      ...genders,
      [event.target.name]: event.target.checked,
    });
  };

  const { hombre, mujer } = genders;

  return (
    <Box>
      <Box mb={3}>
        <Typography variant="subtitle1" gutterBottom>
          Género
          <Box>
            <FormControl
              style={{ margin: 0 }}
              sx={{ m: 3 }}
              component="fieldset"
              variant="standard"
            >
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={hombre}
                      onChange={handleChangeGender}
                      name="hombre"
                    />
                  }
                  label="Hombre"
                  key="hombre"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={mujer}
                      onChange={handleChangeGender}
                      name="mujer"
                    />
                  }
                  label="Mujer"
                  key="mujer"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Typography>
      </Box>
      <Box>
        <Box mb={2}>
          <Typography variant="subtitle1" gutterBottom>
            Color
          </Typography>
        </Box>
        {console.log(Object.keys(colorsMap))}
        <Grid container>
          {Array.from(colorsMap.entries()).map(([key, value]) => (
            <Grid key={key} item sm={4} style={{ textAlign: 'center' }}>
              <Box mb={2}>
                <div
                  style={{
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    background: `${value}`,
                    display: 'inline-block',
                  }}
                ></div>
                <Typography variant="caption" display="block" gutterBottom>
                  {key}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Filters;
