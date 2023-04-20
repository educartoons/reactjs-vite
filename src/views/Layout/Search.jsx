import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function Search() {
  return (
    <Paper
      style={{
        backgroundColor: '#f5f5f5',
        borderRadius: '25px',
        boxShadow: 'none',
      }}
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200 }}
    >
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Buscar"
        inputProps={{ 'aria-label': 'Buscar' }}
      />
    </Paper>
  );
}
