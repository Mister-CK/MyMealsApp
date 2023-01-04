import { StyleSheet, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data.js";
import CategoryGridTile from "../components/CategoryGridTile.js";

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", { categoryId: item.id });
    };
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      ></CategoryGridTile>
    );
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};
export default CategoriesScreen;
const styles = StyleSheet.create({});
