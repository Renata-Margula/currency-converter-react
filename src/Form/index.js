import Input from './Input';
import Select from './Select';
import Button from './Button';
import Result from './Result';
import Clock from "./Clock";
import { useState } from 'react';
import currencies from '../currencies';
import { StyledForm, Fieldset, Paragraph, Label, Legend } from "./styled";

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
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>TWÓJ KANTOR</Legend>
        <p>
          <label>
            <Label>Wprowadź kwotę (PLN):</Label>
            <Input
              amount={amount}
              setAmount={setAmount}
            />
          </label>
        </p>
        <p>
          <label>
            <Label>Wybierz walutę*:</Label>
            <Select
              currencies={currencies}
              currency={currency}
              setCurrency={setCurrency} />
          </label>
        </p>
        <Button />
        <Label>Twoja kwota:
          <Paragraph>
            <Result result={result} />
          </Paragraph>
        </Label>
      </Fieldset>
      <Clock />
    </StyledForm>
  );
};
export default Form;