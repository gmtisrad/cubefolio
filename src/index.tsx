import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

const AppComponent: React.FC = () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<AppComponent />);
