import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import PlannerScreen from "../screens/PlannerScreen";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";


const Navigation = () => {
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({});

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Root"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Root"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator()

const BottomNavigator = () => {
   return (
     <BottomTab.Navigator initialRouteName="Home">
       <BottomTab.Screen
         name="Home"
         component={HomeScreen}
         //  options={{ unmountOnBlur: true }}
         options={{
           tabBarIcon: ({ color, size }) => (
             <FontAwesome name="home" size={size} color={color} />
           ),
         }}
       />
       <BottomTab.Screen
         name="Planner"
         component={PlannerScreen}
         //  options={{ unmountOnBlur: true }}
         options={{
           tabBarIcon: () => (
             <Entypo name="add-to-list" size={24} color="black" />
           ),
         }}
       />
     </BottomTab.Navigator>
   );
}

const Drawer = createDrawerNavigator();

const  DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Planner" component={PlannerScreen} />
    </Drawer.Navigator>
  );
}

/*
const Navigation = () => { 
    return (
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    );
};

export default Navigation;

const styles = StyleSheet.create({});

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Planner" component={PlannerScreen} />
    </Stack.Navigator>
  );
}
*/