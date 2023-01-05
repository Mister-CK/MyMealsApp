import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
const FavoritesScreen = () => {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((mealItem) => {
    return favoriteMealsContext.ids.includes(mealItem.id);
  });
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You haven't selected any favorite meals yet.
        </Text>
      </View>
    );
  } else {
    return <MealsList items={favoriteMeals} />;
  }
};
export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSeize: 24,
    fontWeight: "bold",
  },
});
