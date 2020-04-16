import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, TabBarIOSItem } from 'react-native';
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

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>

      <Image style={{ alignSelf: 'center', marginTop: 140 }} source={require("./assets/ui/homescreen.png")} />

      <Text style={{
        fontFamily: "DidactGothic-Regular",
        fontSize: 30,
        lineHeight: 39,
        textAlign: 'center',
        marginTop: 10,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
      }}>
        welcome, Ryan!</Text>
    </View>
  );
}

// Displays task categories
function TaskDashboard({ navigation }) {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <Text style={styles.title}>Mazi</Text>

      <TouchableOpacity
        style={styles.firstbutton}
        >
        <Image source={require("./assets/ui/button1.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}>
        <Image source={require("./assets/ui/button2.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}>
        <Image source={require("./assets/ui/button3.png")} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}>
        <Image source={require("./assets/ui/button4.png")} />
      </TouchableOpacity>
    </View>
  );
}

function LocalBusinessTasks({ navigation }) {
  return (
    null
    // Placeholder
  );
}

function WellnessTasks({ navigation }) {
  return (
    null
    // Placeholder
  );
}

function FitnessTasks({ navigation }) {
  return (
    null
    // Placeholder
  );
}

function QuarantineTask({ navigation }) {
  return (
    null
    // Placeholder
  );
}

// 
function TaskScreen({ navigation }) {
  return (
    null
    // Placeholder
  );
}

function RewardsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rewards Screen</Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  )
}

// Main app
function App() {

  // Load Font
  let [fontsLoaded] = useFonts({
    'DidactGothic-Regular': require('./assets/fonts/DidactGothic-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    // Bottom Navigation
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

          <Tab.Screen name="Tasks" component={TaskDashboard}
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
    lineHeight: 39,
    marginLeft: 30,
    marginTop: 60,
  },
  firstbutton: {
    marginTop: 90,
    alignSelf: 'center',
  },
  buttons: {
    marginTop: 30,
    alignSelf: 'center',
  }
})