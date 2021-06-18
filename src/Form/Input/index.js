import './style.css';

const Input = ({ amount, setAmount }) => (
    <input
        value={amount}
        onChange={({ target }) => setAmount(target.value)}
        className="form__field"
        type="number"
        name="pln"
        step="any"
        min="0"
        required />
);

export default Input;