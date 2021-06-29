import './style.css';

const Result = ({ result }) => (
    <p className="form__result">
        <strong className="form__result form__result--hidden">
            {result.basicAmount ? result.basicAmount.toFixed(2) : ""}&nbsp;PLN&nbsp;=&nbsp;
        </strong>
        <strong className="form__result">
            {result.totalResult ? result.totalResult.toFixed(2) : ""}&nbsp;{result.currency}
        </strong>
    </p>
);
export default Result;