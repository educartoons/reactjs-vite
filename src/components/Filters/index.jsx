import React, { useState, useEffect } from 'react';
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
  const [checkedFilters, setCheckedFilters] = useState({});

  useEffect(() => {
    const object = {};
    filters.forEach((filter) => {
      object[filter] = false;
    });
    setCheckedFilters(object);
    console.log(object);
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    setCheckedFilters({
      ...checkedFilters,
      [name]: !checkedFilters[name],
    });
  };
  return (
    <Box>
      <FormGroup>
        {filters.map((filter, idx) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedFilters[filter]}
                onChange={handleChange}
                value={filter}
                name={filter}
              />
            }
            label={filter}
            key={idx}
          />
        ))}
      </FormGroup>
      <Box>
        <Typography variant="subtitle1" gutterBottom>
          Color
        </Typography>
        {console.log(Object.keys(colorsMap))}
        <Grid container>
          {Array.from(colorsMap.entries()).map(([key, value]) => (
            <Grid item sm={4} style={{ textAlign: 'center' }}>
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
