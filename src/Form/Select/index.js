import { StyledSelect } from "./styled";

const Select = ({ currencies, currency, setCurrency }) => (
    <StyledSelect
        onChange={({ target }) => setCurrency(target.value)}
        value={currency}>
        {currencies.map(currency => (
            <option key={currency.id} value={currency.id}>
                {currency.name}
            </option>
        ))}
    </StyledSelect>
);
export default Select;