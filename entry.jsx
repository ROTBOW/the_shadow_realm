import React from 'react';
import ReactDOM from 'react-dom';
import Root from '/components/root';

document.addEventListener('DOMContentLoaded', () => {
    let root = document.getElementById('root');
    console.log(root);
    ReactDOM.render(<Root/>, root);
})