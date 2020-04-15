import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();


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

export default App;