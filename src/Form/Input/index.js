import { StyledInput } from "./styled";

const Input = ({ amount, setAmount }) => (
    <StyledInput
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        type="number"
        name="pln"
        step="any"
        min="0"
        required />
);

export default Input;