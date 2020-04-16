import * as React from 'react';
import { Image, Button, StyleSheet, Text, View, TabBarIOSItem } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';


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
      <Text style={styles.title}>Mazi</Text>
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

  let [fontsLoaded] = useFonts({
    'DidactGothic-Regular': require('./assets/fonts/DidactGothic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="#fff"
          inactiveColor="#fff"
          barStyle={{ backgroundColor: '#BEEBE9', paddingBottom: 10 }}
        >
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/home-run.png")} />
              )
            }}
          />

          <Tab.Screen name="Tasks" component={TasksScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/notepad.png")} />
              )
            }}

          />
          <Tab.Screen name="Rewards" component={RewardsScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/birthday-and-party.png")} />
              )
            }}
          />

          <Tab.Screen name="Profile" component={ProfileScreen}
            options={{
              tabBarLabel: "",
              tabBarIcon: ({ }) => (
                <Image source={require("./assets/icons/user.png")} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  title: {
    fontFamily: "DidactGothic-Regular",
    fontSize: 30,
  }
})


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