import React, { useState, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

import cloudinaryHandler from '../../cloudImages';

import { db } from '../../firebase';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

import { collection, addDoc } from 'firebase/firestore';

const AddProduct = () => {
  const [gender, setGender] = React.useState('');
  const [name, setName] = React.useState('');
  const [colors, setColors] = React.useState('');
  const [price, setPrice] = React.useState(0);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeColors = (event) => {
    setColors(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleCreate = async () => {
    const docRef = await addDoc(collection(db, 'produdcts'), {
      name,
      gender,
      colors: colors.split(','),
      price: Number.parseFloat(price),
    });

    console.log(docRef.id);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container mt={8}>
          <Grid item md={4}>
            Hey
          </Grid>
          <Grid item md={6}>
            <Box mb={4}>
              <Typography variant="h6" gutterBottom>
                Agregar Producto
              </Typography>
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Nombre"
                id="name"
                value={name}
                onChange={handleChangeName}
              />
            </Box>
            <Box>
              <Button variant="contained" component="label">
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
                  label="gender"
                  onChange={handleChange}
                >
                  <MenuItem value="Hombre">Hombre</MenuItem>
                  <MenuItem value="Mujer">Mujer</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                label="Colores"
                id="colors"
                onChange={handleChangeColors}
              />
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <InputLabel htmlFor="price">Precio</InputLabel>
                <OutlinedInput
                  id="price"
                  value={price}
                  onChange={handleChangePrice}
                  startAdornment={
                    <InputAdornment position="start">S/ </InputAdornment>
                  }
                  label="Precio"
                />
              </FormControl>
            </Box>
            <Box>
              <Button variant="contained" size="medium" onClick={handleCreate}>
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
