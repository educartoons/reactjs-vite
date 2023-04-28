import React from 'react';
import { Box, Grid } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { toggleGender, toggleColor } from '../../features/filters';
import { fetchProducts } from '../../features/products';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

const COLORS = [
  {
    name: 'naranja',
    hex: '#F26B26',
  },
  {
    name: 'amarillo',
    hex: '#FDD533',
  },
  {
    name: 'morado',
    hex: '#8C429F',
  },
  {
    name: 'azul',
    hex: '#1590C8',
  },
  {
    name: 'rojo',
    hex: '#E7352B',
  },
  {
    name: 'verde',
    hex: '#7BB93C',
  },
  {
    name: 'rosado',
    hex: '#F0728F',
  },
  {
    name: 'gris',
    hex: '#808080',
  },
  {
    name: 'marron',
    hex: '#815D41',
  },
  {
    name: 'negro',
    hex: '#000000',
  },
  {
    name: 'blanco',
    hex: '#FFFFFF',
    border: '#959595',
  },
];

const Filters = () => {
  const genders = useSelector((state) => state.filters.genders);
  const colors = useSelector((state) => state.filters.colors);

  const dispatch = useDispatch();

  const handleChangeGenders = (event) => {
    dispatch(
      toggleGender({
        gender: event.target.name,
      })
    );
    dispatch(
      fetchProducts({
        genders: {
          ...genders,
          [event.target.name]: !genders[event.target.name],
        },
        colors,
      })
    );
  };

  const handleToggleColor = async (name) => {
    dispatch(toggleColor({ name }));
    dispatch(
      fetchProducts({
        colors: { ...colors, [name]: !colors[name] },
        genders,
      })
    );
  };

  return (
    <Box>
      <Box mb={2}>
        <Typography variant="h6" gutterBottom>
          Género
        </Typography>
      </Box>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        variant="standard"
        style={{ margin: '-1em 0 0 0', padding: 0 }}
      >
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={genders.hombre}
                onChange={handleChangeGenders}
                name="hombre"
              />
            }
            label="Hombre"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={genders.mujer}
                onChange={handleChangeGenders}
                name="mujer"
              />
            }
            label="Mujer"
          />
        </FormGroup>
      </FormControl>

      <Box mt={2}>
        <Typography variant="h6" gutterBottom mb={2}>
          Color
        </Typography>
        <Box>
          <Grid container>
            {COLORS.map((color, index) => (
              <Grid key={index} item sm={4} textAlign="center" mb={2}>
                <div
                  style={{
                    backgroundColor: `${color.hex}`,
                    border: color.border ? `1px solid ${color.border}` : 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'inline-block',
                    width: '36px',
                    height: '36px',
                  }}
                  onClick={() => handleToggleColor(color.name)}
                >
                  {colors[color.name] ? (
                    <CheckOutlinedIcon
                      style={{
                        color: color.border ? 'black' : 'white',
                        marginTop: '0.2em',
                      }}
                    />
                  ) : null}
                </div>

                <Typography variant="caption" display="block" gutterBottom>
                  {color.name}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Filters;
