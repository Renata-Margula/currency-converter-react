import './style.css';

const Result = ({ result }) => (
    <strong className="form__result">
        {result.totalResult ? result.totalResult.toFixed(2) : ""}&nbsp;{result.currency}
    </strong>
);
export default Result;