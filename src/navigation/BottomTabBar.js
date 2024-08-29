import React from "react";
import { Image, View, Text, Dimensions } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import TabAccount from "../screens/TabAccount";


const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window'); 
const isWideScreen = width > 600; 

export default function BottomTabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = require("../../assets/tabicon/home.png");
              break;
            case 'Account':
              iconName = require("../../assets/tabicon/account.png");
              break;
            default:
              iconName = require("../../assets/tabicon/home.png");
              break;
          }

          return (
            <View style={{ alignItems: 'center' }}>
              {!focused ? (
                <Image
                  source={iconName}
                  style={{ 
                    height: isWideScreen ? 35 : 25, 
                    width: isWideScreen ? 35 : 25, 
                    tintColor: color }}
                />
              ) : null}
            </View>
          );
        },
        tabBarLabel: ({ focused }) => {
          return focused ? (
            <Text
              style={{
                color: '#569DB5',
                fontSize: isWideScreen ? 20 : 11,
                fontWeight: 'bold',
                marginBottom: isWideScreen ? 0 : 16, // Apply different margin based on screen width
              }}
            >
              {route.name}
            </Text>
          ) : null;
        },
        tabBarActiveTintColor: "#569DB5",
        tabBarInactiveTintColor: "#B0B0B0", // Color for inactive icons
        // tabBarLabelStyle: {
        //   fontSize: 14,
        //   marginTop: 10, /
        // },
        tabBarStyle: {
          backgroundColor: '#ffffff', 
          borderTopWidth: 1, 
          borderTopColor: '#dddddd', 
        },
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={TabAccount} />
    </Tab.Navigator>
  );
}
