import { MEALS, CATEGORIES } from "../data/dummy-data.js";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList.js";
const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({ title: CategoryTitle });
  }, [categoryId, navigation]);
  return <MealsList items={displayedMeals} />;
};
export default MealsOverviewScreen;
