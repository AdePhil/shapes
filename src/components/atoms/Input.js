import styled from "@emotion/styled";

const Input = styled.input`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearence: none;
  background-color: ${(props) =>
    props.backgroundColor || `${props.theme.colors.white}`};
  border-radius: 0.3rem;
  border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.04);
  color: ${(props) => props.theme.colors.label};
  display: block;
  font-size: 1.4rem;
  height: 4.8rem;
  margin: 0;
  outline: none;
  padding: ${(props) => props.padding || "1.5rem"};
  min-height: 50px;
  height: ${(props) => (props.padding ? "auto" : "4.8rem")};
  width: 100%;
  flex: ${(props) => props.flex || 1};

  &::placeholder {
    color: ${(props) => props.theme.colors.brownishgrey};
  }
`;

export default Input;
