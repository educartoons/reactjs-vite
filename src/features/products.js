import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { uploadFile } from '../cloudinary';

import { getGenders, getColors } from './utils';

const initialState = {
  entities: [],
  loading: false,
};

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (data) => {
    console.log('Adding product');

    const { files, name, description, gender, sizes, colors, price } = data;

    const imageUrls = [];

    for await (const file of files) {
      const imageUrl = await uploadFile({
        type: 'image',
        file: file,
        preset: 'nike-sneakers',
      });
      imageUrls.push(imageUrl);
    }

    const docRef = await addDoc(collection(db, 'products'), {
      name,
      description,
      sizes,
      gender,
      colors,
      price,
      imageUrls,
      gender,
    });

    return {
      id: docRef.id,
      name,
      description,
      sizes,
      gender,
      colors,
      price,
      imageUrls,
      gender,
    };
  }
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters = {}, thunkAPI) => {
    console.log('getting products');

    let genders = ['Hombre', 'Mujer'];

    if (filters.genders) {
      genders = getGenders(filters.genders);
    }

    let colors = [
      'naranja',
      'amarillo',
      'morado',
      'azul',
      'rojo',
      'verde',
      'rosado',
      'gris',
      'marron',
      'negro',
    ];

    if (filters.colors) {
      colors = getColors(filters.colors);
    }

    console.log('genders', genders);
    console.log('colors', colors);

    const q = query(
      collection(db, 'products'),
      where('gender', 'in', genders),
      where('colors', 'array-contains-any', colors)
    );

    const querySnapshot = await getDocs(q);

    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    console.log(filters.genders);
    return products;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
    });
    // builder.addCase(fetchProducts.rejected, (state, action)=>{
    //   state.error = ''
    // })
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.entities = [action.payload, ...state.entities];
      state.loading = false;
    });
    builder.addCase(addProduct.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const productsReducer = productsSlice.reducer;

export default productsSlice;
