import React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { useDispatch, useSelector } from 'react-redux';
import { toggleGender } from '../../features/filters';
import { fetchProducts } from '../../features/products';

const Filters = () => {
  const genders = useSelector((state) => state.filters.genders);

  const dispatch = useDispatch();

  const handleChangeGenders = (event) => {
    dispatch(
      toggleGender({
        gender: event.target.name,
        value: !genders[event.target.name],
      })
    );
    dispatch(
      fetchProducts({
        genders: {
          ...genders,
          [event.target.name]: !genders[event.target.name],
        },
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
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
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
    </Box>
  );
};

export default Filters;
