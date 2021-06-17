import React from 'react';
import './style.css';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Result from './Result';
import { useState } from 'react';

const Fieldset = ({ currencies }) => {
    const [amount, setAmount] = useState();
    const [result, setResult] = useState([]);
    const [currency, setCurrency] = useState(currencies[0].id);

    const calculate = (currency, amount) => {
        const rateAmount = currencies.find(({ id }) => id === currency).rate;

        setResult({
            totalResult: amount / rateAmount,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculate(currency, amount);
    };

    return (
        <fieldset className="form__fieldset" onSubmit={onFormSubmit}>
            <legend className="form__legend">TWÓJ KANTOR</legend>
            <p>
                <label>
                    <span className="form__label">Wprowadź kwotę (PLN):</span>
                    <Input amount={amount} setAmount={setAmount} />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__label">Wybierz walutę*:</span>
                    <Select
                        currencies={currencies}
                        currency={currency}
                        setCurrency={setCurrency} />
                </label>
            </p>
            <Button>
            </Button>
            <span className="form__label">Twoja kwota:
                <Result result={result} />
            </span>
        </fieldset>
    );
};

export default Fieldset;