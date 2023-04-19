import React from 'react';
import { createRoot } from 'react-dom/client';

import Home from './views/Home';
import AddProduct from './views/AddProduct';

const dom = document.getElementById('root');

const root = createRoot(dom);

root.render(<Home />);
