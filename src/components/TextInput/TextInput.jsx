import * as React from "react";
import { useInput } from "@mui/base/useInput";
import { styled } from "@mui/system";
import { unstable_useForkRef as useForkRef } from "@mui/utils";

const CustomInput = React.forwardRef(function CustomInput(props, ref) {
  const {  getInputProps } = useInput(props);
  const inputProps = getInputProps();
  inputProps.ref = useForkRef(inputProps.ref, ref);
  return <StyledInputElement {...props} {...inputProps} />;
});

export default function UseInput(props) {
  return <CustomInput aria-label="Demo input" {...props} />;
}

const StyledInputElement = styled("input")(
  () => `
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color:#696e79;
  background: #f5f5f6;
  border: 1px solid #f5f5f6;



  &:focus {
    background: white;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
