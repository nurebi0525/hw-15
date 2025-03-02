import React, { useContext } from "react";
import { MealForm } from "./MealForm";
import styled from "styled-components";
import { basketContext } from "../../store/basketContext";

export const MealItem = (props) => {
  // Global states
  // Local state
  // useEfect
  // useState
  const { title, description, price, id } = props;
  const {onAdd} = useContext(basketContext)// poluchaem function onAdd ith context
  function onAddToBasket(amount) { // function dle dobavlenie tovara na korzinu
    console.log(amount);
    const newOrderedFood = { // info zakaza
      amount: +amount,
      title: title,
      price: price,
      id: id,
    };
    onAdd(newOrderedFood) // dobavlaem tovar v korzinu
  }
  return (
    <StyledItem>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledPrice>${price}</StyledPrice>
      </div>
      <MealForm onSubmit={onAddToBasket}/>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
`;

const StyledTitle = styled.p`
  font-weight: 700;
`;

const StyledDescription = styled.p`
  font-style: italic;
`;
const StyledPrice = styled.p`
  color: #c7870f;
  font-weight: bolder;
`;
