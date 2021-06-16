import React from 'react';
import './style.css';

const Input = () => (
    <input 
    className="form__field" 
    type="number" 
    name="pln" 
    step="any" 
    min="0" 
    required />
);

export default Input;