import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen.js";
import MealsOverviewScreen from "./screens/MealsOverviewScreen.js";
import MealsDetailsScreen from "./screens/MealsDetailsScreen.js";
import FavoritesScreen from "./screens/FavoritesScreen.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context.js";
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#351401",
          },
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#351401",
          },
          tabBarIcon: ({ focused, color }) => (
            <Ionicons name="star" color={color} size={26} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="CategoriesScreen"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
                title: "Categories",
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealsDetailsScreen"
              component={MealsDetailsScreen}
              options={{
                title: "Meal Details",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
