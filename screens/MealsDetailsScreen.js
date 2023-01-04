import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import List from "../components/MealDetail/List.js";
import SubTitle from "../components/MealDetail/Subtitle.js";
import MealDetails from "../components/MealDetails.js";
import { MEALS } from "../data/dummy-data.js";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton.js";
const MealsDetailsScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });
  const headerButtonPressedHandler = () => {
    console.log("pressed");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressedHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressedHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.innercontainer}>
        <View>
          <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
          <Text style={styles.title}>{selectedMeal.title}</Text>
        </View>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          style={styles.detailText}
          textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <SubTitle>Ingredients</SubTitle>
            <List data={selectedMeal.ingredients}></List>
            <SubTitle>Steps</SubTitle>
            <List data={selectedMeal.steps}></List>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default MealsDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: { marginHorizontal: 4, fontSize: 12 },
  image: { width: "100%", height: 300, borderRadius: 8 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
