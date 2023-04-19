import React, { useState, useEffect } from 'react';
import { collection, addDoc } from 'firebase/firestore';

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
import Alert from '@mui/material/Alert';

import Snackbar from '@mui/material/Snackbar';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

import { isAValidArrayColors } from './util';

import { db } from '../../firebase';

import { uploadImage } from '../../cloudinary';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [colors, setColors] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [errorColors, setErrorColors] = useState(false);

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeColors = (e) => {
    setErrorColors(false);
    setColors(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleUploadProduct = async () => {
    setLoading(true);

    const imageUrl = await uploadImage({
      type: 'image',
      file,
      preset: 'sneakers',
    });

    if (!imageUrl) {
      setLoading(false);
      return;
    }

    if (!isAValidArrayColors(colors)) {
      setErrorColors(true);
      setLoading(false);
      return;
    }

    try {
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        gender: gender,
        colors: colors.split(',').map((color) => color.trim().toLowerCase()),
        price: Number.parseFloat(price),
        imageUrl,
      });
      //
      setName('');
      setColors('');
      setGender('');
      setPrice('');
      setOpenSnackBar(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error('Error adding document: ', e);
    }
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <React.Fragment>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: '100%' }}
        >
          El producto <b>{name}</b> ha sido agregado satisfactoriamente.
        </Alert>
      </Snackbar>

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
                value={name}
                onChange={handleChangeName}
              />
            </Box>
            <Box mb={2}>
              <Button variant="outlined" component="label" fullWidth>
                Upload File
                <input type="file" hidden onChange={handleFile} />
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
                value={colors}
                onChange={handleChangeColors}
              />
              {errorColors && (
                <Box mt={2}>
                  <Alert severity="error">
                    Los colores deben ir separado por comas y deben ser colores
                    validos
                  </Alert>
                </Box>
              )}
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                id="price"
                label="Precio"
                variant="filled"
                value={price}
                onChange={handleChangePrice}
              />
            </Box>
            <Box>
              <LoadingButton
                loading={loading}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
                onClick={handleUploadProduct}
              >
                Guardar
              </LoadingButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AddProduct;
