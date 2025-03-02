import { Header } from "./components/Header";
import { AvailableMeals } from "./components/meals/AvailableMeals";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/Summary";
import { BasketContextProvider } from "./store/basketContext";

function App() {
  return (
    <BasketContextProvider>
      
      <Header />
      <Summary />
      <Meals>
        <AvailableMeals />
      </Meals>
    </BasketContextProvider>
  );
}

export default App;
