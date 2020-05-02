import React from "react";
import { Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// Screens
import HomeScreen from "../screens/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { RewardsScreen } from "../screens/RewardsScreen";
import { TaskScreen } from "../screens/TaskScreen";
import { LocalBusinessTasks } from "../screens/LocalBusinessTasks";
import { WellnessTasks } from "../screens/WellnessTasks";
import { FitnessTasks } from "../screens/FitnessTasks";
import { QuarantineTask } from "../screens/QuarantineTask";
import { TaskDashboard } from "../screens/TaskDashboard";

// Navigation
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        inactiveColor="#fff"
        barStyle={{ backgroundColor: "#BEEBE9", paddingBottom: 10 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({}) => (
              <Image source={require("../assets/icons/home-run.png")} />
            ),
          }}
        />

        <Tab.Screen
          name="Tasks"
          component={TaskDashboardNav}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({}) => (
              <Image source={require("../assets/icons/notepad.png")} />
            ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({}) => (
              <Image
                source={require("../assets/icons/birthday-and-party.png")}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({}) => (
              <Image source={require("../assets/icons/user.png")} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function TaskDashboardNav({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        initialRouteName: "TaskDashboard",
      }}
    >
      <Stack.Screen name="TaskDashboard" component={TaskDashboard} />

      <Stack.Screen name="LocalBusinessTasks" component={LocalBusinessTasks} />
      <Stack.Screen name="WellnessTasks" component={WellnessTasks} />
      <Stack.Screen name="FitnessTasks" component={FitnessTasks} />
      <Stack.Screen name="QuarantineTask" component={QuarantineTask} />

      <Stack.Screen name="TaskScreen" component={TaskScreen} />

      <Stack.Screen name="RewardsScreen" component={RewardsScreen} />
    </Stack.Navigator>
  );
}
