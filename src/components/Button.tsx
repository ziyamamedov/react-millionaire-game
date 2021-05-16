import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.mainTextColor};
  cursor: pointer;
  border: none;
  padding: 1rem;
  font-size: 1rem;
  background-color: ${(props) => props.theme.quizBg};
  border: 1px solid white;
  border-radius: 30px;
  transition: background-color 0.25s;

  &:hover {
    background-color: ${(props) => props.theme.btnHover};
  }
  &:active {
    background-color: ${(props) => props.theme.btnActive};
  }
`;

export default Button;
