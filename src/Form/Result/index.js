import { StyledResult } from "./styled";

const Result = ({ result }) => (
    <p>
        <StyledResult>
            {result.basicAmount ? result.basicAmount.toFixed(2) : ""}&nbsp;PLN&nbsp;=&nbsp;
            {result.totalResult ? result.totalResult.toFixed(2) : ""}&nbsp;{result.currency}
        </StyledResult>
    </p>
);
export default Result;