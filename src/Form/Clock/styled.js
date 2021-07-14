import styled from "styled-components";

export const StyledClock = styled.div`
    float: right;
    font-family: 'Source Code Pro', monospace;
    color: black;
    font-size: smaller;

    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: auto;
        word-break: keep-all;
        text-align: center;
  }
`;