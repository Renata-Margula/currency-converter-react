import './style.css';

const Result = ({ result }) => (
    <strong className="form__result">
        {result.totalResult}&nbsp;{result.currency}
    </strong>
);
export default Result;