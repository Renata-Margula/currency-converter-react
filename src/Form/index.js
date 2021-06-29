import './style.css';
import Input from './Input';
import Select from './Select';
import Button from './Button';
import Result from './Result';
import Clock from "./Clock";
import { useState } from 'react';
import currencies from '../currencies';

const Form = () => {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState([]);
  const [currency, setCurrency] = useState(currencies[0].id);
  const calculateResult = (currency, amount) => {
    const rateAmount = currencies.find(({ id }) => id === currency).rate;
    setResult({
      basicAmount: +amount,
      totalResult: (amount / rateAmount),
      currency,
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    setAmount("");
    calculateResult(currency, amount);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">TWÓJ KANTOR</legend>
        <p>
          <label>
            <span className="form__label">Wprowadź kwotę (PLN):</span>
            <Input
              amount={amount}
              setAmount={setAmount}
            />
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
        <Button />
        <span className="form__label">Twoja kwota:
          <p className="form__paragraph">
            <Result result={result} />
          </p>
        </span>
      </fieldset>
      <Clock />
    </form>
  );
};
export default Form;