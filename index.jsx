import React from 'react';
import { createRoot } from 'react-dom/client';

import { Body } from './body';

function App() {
  return <Body />
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
