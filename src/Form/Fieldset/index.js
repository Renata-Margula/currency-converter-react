import React from 'react';
import './style.css';
import Input from './Input';

const Fieldset = () => (
    <fieldset class="form__fieldset">
        <legend class="form__legend">TWÓJ KANTOR</legend>
        <p>
            <label>
                <span class="form__label">Wprowadź kwotę (PLN):</span>
                <Input />
            </label>
        </p>
        <p>
            <label>
                <span class="form__label">Wybierz walutę*:</span>
                <select class="form__field js-currency" name="currencyType">
                    <option value="EUR">EUR (euro)</option>
                    <option value="GBP">GBP (funt szterling)</option>
                    <option value="HUF">HUF (forint (Węgry))</option>
                    <option value="RON">RON (lej rumuński)</option>
                </select>
            </label>
        </p>
        <button class="form__button js-button">Przelicz kwotę!</button>
        <span class="form__label">Twoja kwota: <strong class="form__result js-result"></strong></span>
    </fieldset>
);

export default Fieldset;