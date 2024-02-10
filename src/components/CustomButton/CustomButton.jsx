import { Button as BaseButton } from "@mui/base/Button";
import { styled } from "@mui/system";

export default function CustomButton(props) {
    return <Button {...props}>{props.lable}</Button>;
}

const Button = styled(BaseButton)(
  () => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  background-color: #ff3f6c;
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
//   border: 1px solid ;


  &:hover {
    background-color: #ff3f6c;
  }

  &:active {
    background-color: #ff3f6c;
    box-shadow: none;
    transform: scale(0.99);
  }

  &:focus-visible {
    outline: none;
  }

  &.base--disabled {
    background-color: grey;
    color: black;
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`
);
