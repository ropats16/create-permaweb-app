import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';

// @TODO: Add Arweave providers
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
