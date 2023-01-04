import { View, Text, StyleSheet } from "react-native";
const SubTitle = ({ children }) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
};
export default SubTitle;

const styles = StyleSheet.create({
  subTitle: {
    color: "#e2b497",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subTitleContainer: {
    borderBottomWidth: 2,
    borderColor: "#e2b497",
    marginHorizontal: 12,
    marginvertical: 4,
    padding: 6,
  },
});
