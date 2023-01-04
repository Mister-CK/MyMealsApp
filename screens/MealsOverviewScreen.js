import { StyleSheet, View, Text, FlatList } from "react-native";
import MealItem from "../components/MealItem.js";
import { MEALS, CATEGORIES } from "../data/dummy-data.js";
import { useLayoutEffect } from "react";
const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });
  useLayoutEffect(() => {
    const CategoryTitle = CATEGORIES.find((cat) => cat.id === categoryId).title;
    navigation.setOptions({ title: CategoryTitle });
  }, [categoryId, navigation]);
  const renderMealItem = ({ item }) => {
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
