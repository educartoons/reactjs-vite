import React from 'react';
import Grid from '@mui/material/Grid';
import Search from './Search';
import Navigation from './Navigation';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';

const Header = () => {
  const cart = useSelector((state) => state.cart.entities);
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <svg height="60px" width="60px" fill="#111" viewBox="0 0 69 32">
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
        </svg>
      </Grid>
      <Grid item>
        <Navigation />
      </Grid>
      <Grid item>
        <Search />
      </Grid>
      <Grid item>
        <Badge badgeContent={cart.length} color="primary">
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              width: '24px',
              height: '24px',
            }}
          >
            <svg
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24px"
              height="24px"
              fill="none"
            >
              <path
                stroke="#000"
                strokeWidth="1.5"
                d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              ></path>
            </svg>
          </button>
        </Badge>
      </Grid>
    </Grid>
  );
};

export default Header;
