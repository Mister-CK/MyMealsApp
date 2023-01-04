import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();
  const pressHandler = () => {
    navigation.navigate("MealsDetailsScreen", { mealId: id });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={pressHandler}
      >
        <View style={styles.innercontainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
};
export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overFlow: "hidden",
    backgroundColor: "white",
    //shadow android
    elevation: 16, // not working?
    //shadow iOS
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  image: { width: "100%", height: 200, borderRadius: 8 },
  title: { fontWeight: "bold", textAlign: "center", fontSize: 18, margin: 8 },
  buttonPressed: {
    opacity: 0.5,
  },
  innercontainer: {
    borderRadius: 8,
  },
});
