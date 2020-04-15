import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const tasks = [
  {
    "name": "",
    "category": "",
    "points": 0,
  }
]

const rewards = [
  {
    "name": "",
    "category": "",
    "points": 0,
  }
]

// Stack Navigator Props (Screen Components)
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />

      <Button
        title="Rewards"
        onPress={() => navigation.navigate('Rewards')}
      />

      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

// Has secondary screen (TaskDescScreen)
function TasksScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tasks Screen</Text>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />

      <Button
        title="Rewards"
        onPress={() => navigation.navigate('Rewards')}
      />

      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

// TaskDescScreen - Timer and below it is a done button and cancel button. 
function TaskDescScreen({ navigation }) {
  return (
    null
    // Placeholder
  );
}

function RewardsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rewards Screen</Text>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />

      <Button
        title="Rewards"
        onPress={() => navigation.navigate('Rewards')}
      />

      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>

      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Tasks"
        onPress={() => navigation.navigate('Tasks')}
      />

      <Button
        title="Rewards"
        onPress={() => navigation.navigate('Rewards')}
      />

      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        style={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Rewards" component={RewardsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App;

/*
// Routes
function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#f4511e', },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold', },
          headerTitle: "",
          headerShown: false,
        }}
        >

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          initialParams={{ tasks }}
        />

        <Stack.Screen name="Rewards" component={RewardsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
*/