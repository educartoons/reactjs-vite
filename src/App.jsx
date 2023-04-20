import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './views/Home';
import AddProduct from './views/AddProduct';
import Layout from './views/Layout';

const dom = document.getElementById('root');

const root = createRoot(dom);

root.render(<Layout />);
