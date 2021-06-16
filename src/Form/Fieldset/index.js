import React from 'react';
import './style.css';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Result from './Result';

const Fieldset = () => (
    <fieldset className="form__fieldset">
        <legend className="form__legend">TWÓJ KANTOR</legend>
        <p>
            <label>
                <span className="form__label">Wprowadź kwotę (PLN):</span>
                <Input />
            </label>
        </p>
        <p>
            <label>
                <span className="form__label">Wybierz walutę*:</span>
                <Select>
                </Select>
            </label>
        </p>
        <Button>
        </Button>
        <span className="form__label">Twoja kwota:
            <Result>
            </Result>
        </span>
    </fieldset>
);

export default Fieldset;