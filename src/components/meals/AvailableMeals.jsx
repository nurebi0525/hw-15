import React from "react";
import { DUMMY_MEALS } from "../../styles/availableMeal";
import { MealItem } from "./MealItem";
import styled from "styled-components";
import { Box, Container } from "@mui/material";
export const AvailableMeals = () => {
  return (
    <StyledAvailabelMeals>
      {DUMMY_MEALS.map((food) => {
        return (
          <div key={food.id}>
            <MealItem
              title={food.title}
              description={food.description}
              price={food.price}
              id={food.id}
            />
            <StyledLine></StyledLine>
          </div>
        );
      })}
    </StyledAvailabelMeals>
  );
};

const StyledAvailabelMeals = styled(Container)`
  padding: 10px;
  background-color: #ffffff;
  width: 1200px;
  margin: 0 auto;
  max-width: 100%;
  border-radius: 20px;
`;
const StyledLine = styled(Box)`
  background-color: grey;
  width: 100%;
  height: 2px;
`;
