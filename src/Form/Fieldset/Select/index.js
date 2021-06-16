import React from 'react';
import './style.css';

const Select = () => (
    <select className="form__field" name="currencyType">
        <option value="EUR">EUR (euro)</option>
        <option value="GBP">GBP (funt szterling)</option>
        <option value="HUF">HUF (forint (Węgry))</option>
        <option value="RON">RON (lej rumuński)</option>
    </select>
);

export default Select;