import CaretGray from "../../assets/svgs/caret-gray.svg";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Select = styled.select`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme, color }) => `${theme.colors.white}`};
  background-image: ${({ white }) => `url(${CaretGray})`};
  background-position: calc(100% - 0.8rem) 50%;
  background-repeat: no-repeat;
  border-radius: 0.5rem;
  border: 1px solid rgba(226, 224, 224, 0.86);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.04);
  color: ${({ theme, textColor }) =>
    theme.colors[textColor] || theme.colors.label};
  font-size: 1.4rem;
  height: ${({ padding }) => (padding ? "auto" : "4.8rem")};
  outline: none;
  padding: ${({ padding }) => padding || "0 1.8rem 0 1.5rem "};
  position: relative;
  width: 100%;
  flex: 1;
  text-transform: capitalize;
  margin: ${({ m }) => m || "auto"};
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `}
  &::placeholder {
    color: ${(props) => props.theme.colors.brownishgrey};
  }
`;

export default Select;
