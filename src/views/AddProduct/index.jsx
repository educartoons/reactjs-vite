import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [colors, setColors] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeColors = (e) => {
    setColors(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={2}></Grid>
          <Grid item md={6}>
            <Box mt={2} mb={2}>
              <Typography variant="h5" gutterBottom>
                Agregar Producto
              </Typography>
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                id="name"
                label="Nombre"
                variant="filled"
                onChange={handleChangeName}
              />
            </Box>
            <Box mb={2}>
              <Button variant="outlined" component="label" fullWidth>
                Upload File
                <input type="file" hidden />
              </Button>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel id="gender-select-label">Sexo</InputLabel>
                <Select
                  labelId="gender-select-label"
                  id="gender"
                  value={gender}
                  label="Age"
                  variant="filled"
                  onChange={handleChangeGender}
                >
                  <MenuItem value="Hombre">Hombre</MenuItem>
                  <MenuItem value="Mujer">Mujer</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                id="colors"
                label="Colores"
                variant="filled"
                onChange={handleChangeColors}
              />
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                id="price"
                label="Precio"
                variant="filled"
                onChange={handleChangePrice}
              />
            </Box>
            <Box>
              <Button variant="contained" size="medium">
                Guardar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AddProduct;
