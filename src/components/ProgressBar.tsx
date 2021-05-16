import styled from "styled-components";

export interface ProgressBarProps {}

const ProgressBar: React.FC<ProgressBarProps> = () => {
  return (
    <StyledProgressBar>
      <StyledPrimarySum>
        <span>15</span> 1 000 000
      </StyledPrimarySum>
      <StyledSecondarySum>
        <span>14</span> 500 000
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>13</span> 250 000
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>12</span> 125 000
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>11</span> 64 000
      </StyledSecondarySum>
      <StyledPrimarySum>
        <span>10</span> 32 000
      </StyledPrimarySum>
      <StyledSecondarySum>
        <span>9</span> 16 000
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>8</span> 8 000
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>7</span> 4 000
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>6</span> 2 000
      </StyledSecondarySum>
      <StyledPrimarySum>
        <span>5</span> 1 000
      </StyledPrimarySum>
      <StyledSecondarySum>
        <span>4</span> 500
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>3</span> 300
      </StyledSecondarySum>
      <StyledSecondarySum>
        <span>2</span> 200
      </StyledSecondarySum>
      <StyledSecondarySum className="active">
        <span>1</span> 100
      </StyledSecondarySum>
    </StyledProgressBar>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
  background-color: #0b115b;
  color: orange;
  position: absolute;
  top: 40%;
  right: 10%;
  transform: translateY(-50%);
  padding: 1rem;
`;

const StyledSecondarySum = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3rem;
  padding: 0 0.5rem;
  border-radius: 10px;
  font-weight: bold;
  &::last-child {
    margin-bottom: 0;
  }
  span {
    margin-right: 2rem;
  }
  &.active {
    background-color: orange;
    color: black;
  }
`;

const StyledPrimarySum = styled(StyledSecondarySum)`
  color: white;
`;
