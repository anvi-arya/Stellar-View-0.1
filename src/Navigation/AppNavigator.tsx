import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SkyMapScreen from "../screens/SkyMapScreen";
import EventsScreen from "../screens/EventsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="SkyMap" component={SkyMapScreen} />
      <Tab.Screen name="Events" component={EventsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />

    </Tab.Navigator>
  );
}