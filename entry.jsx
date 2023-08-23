import React from 'react';
import Root from '/components/root';
import { createRoot } from 'react-dom/client';

import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
    const contan = document.getElementById('root');
    const root = createRoot(contan);
    root.render(<Root/>)
})