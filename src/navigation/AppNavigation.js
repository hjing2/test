import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabBar from "./BottomTabBar";
import Home from "../screens/Home";
import TabAccount from "../screens/TabAccount";
import OnBoarding from "../screens/OnBoarding";

const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerShown: false,
      }}
      initialRouteName="OnBoarding"
    >
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
      <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TabAccount" component={TabAccount} />
    </Stack.Navigator>
    
  );
}

export default Navigation;
