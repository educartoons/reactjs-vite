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

import { uploadFile } from '../../cloudinary';

import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProducts } from '../../features/products';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [colors, setColors] = useState('');
  const [gender, setGender] = useState('');
  const [price, setPrice] = useState('');
  const [files, setFiles] = useState([]);
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [sizes, setSizes] = useState([]);

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [errorColors, setErrorColors] = useState(false);

  const loading = useSelector((state) => state.products.loading);

  const dispatch = useDispatch();

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

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeSizes = (e) => {
    setSizes(e.target.value);
  };

  const handleUploadProduct = async () => {
    if (!isAValidArrayColors(colors)) {
      setErrorColors(true);
      return;
    }

    try {
      await dispatch(
        addProduct({
          name,
          price,
          description,
          colors: colors.split(',').map((color) => color.trim().toLowerCase()),
          sizes: sizes
            .split(',')
            .map((color) => Number.parseFloat(color.trim())),
          files,
          gender,
        })
      );
      setOpenSnackBar(true);
      //
      setName('');
      setColors('');
      setGender('');
      setPrice('');
      setImage('');
      setFiles([]);
      setSizes('');
      setDescription('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleChangeFiles = (e) => {
    setFiles([...e.target.files]);
    handleReadFile(e.target.files[0]);
  };

  const handleReadFile = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', function () {
      console.log('url');
      console.log(reader.result);
      setImage(reader.result);
    });
    reader.readAsDataURL(file);
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
                <input
                  type="file"
                  hidden
                  onChange={handleChangeFiles}
                  multiple
                />
              </Button>
              <Box mt={2}>
                <img style={{ width: '200px' }} src={image} alt="" />
              </Box>
            </Box>
            <Box mb={2}>
              <FormControl fullWidth>
                <TextField
                  id="description"
                  label="Descripción"
                  placeholder="Descripción"
                  multiline
                  variant="filled"
                  rows={4}
                  value={description}
                  onChange={handleChangeDescription}
                />
              </FormControl>
            </Box>
            <Box mb={2}>
              <TextField
                fullWidth
                id="sizes"
                label="Tallas"
                variant="filled"
                value={sizes}
                onChange={handleChangeSizes}
              />
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
