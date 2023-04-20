import React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const Filters = (props) => {
  const { hombre, mujer } = props.gender;

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
                checked={hombre}
                onChange={props.handleChangeGenders}
                name="hombre"
              />
            }
            label="Hombre"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mujer}
                onChange={props.handleChangeGenders}
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
