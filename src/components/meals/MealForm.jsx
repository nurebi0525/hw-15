import { useState } from "react";
import { Buttonui } from "../UI/Buttonui";
import styled from "styled-components";
import { Box, Container } from "@mui/material";

export const MealForm = ({onSubmit}) => {
  const [amountValue, setAmountvalue] = useState(1);

  function amountValueHandle(e) {
    setAmountvalue(e.target.value)
  }
  // pri add info prihodit s onAddTobasket v onSubmit
  function submitHandler(e) {
    e.preventDefault() // ne perezagrujat ctranisu
    onSubmit(amountValue) // kolichestva tovara
  }
  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledWrapper>
        <p>Amount</p>
        <StyledInput type="number" 
        value={amountValue}
         onChange={amountValueHandle} />
      </StyledWrapper>

      <Buttonui type="submit" variant="default">Add +</Buttonui>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bolder;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 50px;
  margin-left: 5px;
  border-radius: 5px;
`;
